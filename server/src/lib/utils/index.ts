import { Request } from "express";
import { ContentDetails, Database, Listing, Snippet, Player, Status, User } from "../types";

export const authorize = async (
  db: Database,
  req: Request
): Promise<User | null> => {
  const token = req.get("X-CSRF-TOKEN");
  const viewer = await db.users.findOne({
    _id: req.signedCookies.viewer,
    token
  });

  return viewer;
};

export const formatYoutubeData = (youtubeData: Listing): Listing => {
  return <Listing> { 
    id: youtubeData.id,
    etag: youtubeData.etag,
    kind: youtubeData.kind,
    snippet: formatSnippetYoutubeData(youtubeData.snippet),
    contentDetails: formatContentDetailsYoutubeData(youtubeData.contentDetails),
    status: formatStatusYoutubeData(youtubeData.status),
    player: formatPlayerYoutubeData(youtubeData.player),
  };
}

const formatSnippetYoutubeData = (snippet: Snippet): Snippet => {
  return <Snippet> {
    title: snippet.title,
    description: snippet.description,
    publishedAt: snippet.publishedAt,
    channelId: snippet.channelId,
    channelTitle: snippet.channelTitle,
    categoryId: snippet.categoryId,
    liveBroadcastContent: snippet.liveBroadcastContent,
    tags: snippet.tags,
  }
} 

const formatContentDetailsYoutubeData = (contentDetails: ContentDetails): ContentDetails => {
  return <ContentDetails> {
    dimension: contentDetails.dimension,
    definition: contentDetails.definition,
  };
}

const formatStatusYoutubeData = (status: Status): Status => {
  return <Status> {
    license: status.license,
  };
}

const formatPlayerYoutubeData = (player: Player): Player => {
  return <Player> {
    embedHtml: player.embedHtml,
  };
}