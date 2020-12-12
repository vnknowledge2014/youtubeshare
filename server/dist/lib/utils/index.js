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
exports.formatYoutubeData = exports.authorize = void 0;
const authorize = (db, req) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.get("X-CSRF-TOKEN");
    const viewer = yield db.users.findOne({
        _id: req.signedCookies.viewer,
        token
    });
    return viewer;
});
exports.authorize = authorize;
const formatYoutubeData = (youtubeData) => {
    return {
        id: youtubeData.id,
        etag: youtubeData.etag,
        kind: youtubeData.kind,
        snippet: formatSnippetYoutubeData(youtubeData.snippet),
        contentDetails: formatContentDetailsYoutubeData(youtubeData.contentDetails),
        status: formatStatusYoutubeData(youtubeData.status),
        player: formatPlayerYoutubeData(youtubeData.player),
    };
};
exports.formatYoutubeData = formatYoutubeData;
const formatSnippetYoutubeData = (snippet) => {
    return {
        title: snippet.title,
        description: snippet.description,
        publishedAt: snippet.publishedAt,
        channelId: snippet.channelId,
        channelTitle: snippet.channelTitle,
        categoryId: snippet.categoryId,
        liveBroadcastContent: snippet.liveBroadcastContent,
        tags: snippet.tags,
    };
};
const formatContentDetailsYoutubeData = (contentDetails) => {
    return {
        dimension: contentDetails.dimension,
        definition: contentDetails.definition,
    };
};
const formatStatusYoutubeData = (status) => {
    return {
        license: status.license,
    };
};
const formatPlayerYoutubeData = (player) => {
    return {
        embedHtml: player.embedHtml,
    };
};
