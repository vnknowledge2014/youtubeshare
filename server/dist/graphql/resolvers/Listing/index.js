"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listingResolvers = void 0;
const api_1 = require("../../../lib/api");
const utils_1 = require("../../../lib/utils");
exports.listingResolvers = {
    Query: {
        searchVideo: (_root, { input, limit, page }, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const data = {
                    total: 0,
                    result: [],
                };
                let cursor = yield db.listings.find({
                    $text: {
                        $search: input.title,
                    },
                });
                cursor = cursor.skip(page > 0 ? (page - 1) * limit : 0);
                cursor = cursor.limit(limit);
                data.total = yield cursor.count();
                data.result = yield cursor.toArray();
                return data;
            }
            catch (error) {
                throw new Error(`Failed to query youtube video listings: ${error}`);
            }
        }),
        getListingVideo: (_root, { limit, page }, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const data = {
                    total: 0,
                    result: [],
                };
                let cursor = yield db.listings.find().sort({
                    "_id": -1
                });
                cursor = cursor.skip(page > 0 ? (page - 1) * limit : 0);
                cursor = cursor.limit(limit);
                data.total = yield cursor.count();
                data.result = yield cursor.toArray();
                return data;
            }
            catch (error) {
                throw new Error(`Failed to query youtube video listings: ${error}`);
            }
        }),
    },
    Mutation: {
        shareVideo: (_root, { input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const viewer = yield utils_1.authorize(db, req);
                if (!viewer) {
                    throw new Error("viewer cannot be found");
                }
                const youtubeData = yield api_1.Google.getYoutubeVideo(input.ids);
                const [mapYoutubeData] = JSON.parse(JSON.stringify(youtubeData.youtube.items));
                yield db.listings.createIndex({
                    "snippet.title": "text",
                    "snippet.description": "text",
                });
                const updateListing = yield db.listings.updateOne({
                    id: utils_1.formatYoutubeData(mapYoutubeData).id,
                }, {
                    $set: Object.assign({}, utils_1.formatYoutubeData(mapYoutubeData)),
                }, { upsert: true });
                if (updateListing.matchedCount === 0) {
                    const listing = yield db.listings.findOne({
                        id: utils_1.formatYoutubeData(mapYoutubeData).id,
                    });
                    listing ?
                        yield db.users.updateOne({ _id: viewer._id }, { $push: { listings: listing._id } }) : null;
                    return listing;
                }
                return null;
            }
            catch (error) {
                throw new Error(`Failed to share youtube video: ${error}`);
            }
        }),
    },
    Listing: {
        _id: (listing) => {
            return listing._id;
        },
    },
};
