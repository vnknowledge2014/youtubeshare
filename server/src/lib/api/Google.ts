import { google } from "googleapis";

const auth = new google.auth.OAuth2(
  process.env.G_CLIENT_ID,
  process.env.G_CLIENT_SECRET,
  `${process.env.PUBLIC_URL}/login`
);

export const Google = {
  authUrl: auth.generateAuthUrl({
    access_type: "online",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/youtube",
      "https://www.googleapis.com/auth/youtube.readonly",
    ],
  }),
  logIn: async (code: string) => {
    const { tokens } = await auth.getToken(code);

    auth.setCredentials(tokens);

    const { data } = await google.people({ version: "v1", auth }).people.get({
      resourceName: "people/me",
      personFields: "emailAddresses,names,photos",
    });

    return { user: data };
  },
  getYoutubeVideo: async (id: string[]) => {
    const { data } = await google
      .youtube({ version: "v3", auth: "AIzaSyAUuWIoXG8Ju1P-t2kwsG1y48aNPOXo9pc" })
      .videos.list({
        id: id,
        part: [
          "id",
          "snippet",
          "contentDetails",
          "player",
          "status",
        ],
        maxHeight: 360,
        maxWidth: 539,
      });
    return { youtube: data };
  },
};
