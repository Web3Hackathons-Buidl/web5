const { protocol, status } = await web5.dwn.protocols.configure({
  message: {
    definition: {
      protocol: "https://trapcard.app/protocol",
      published: false,
      types: {
        album: {
          schema: "https://trapcard.app/protocol/album",
          dataFormats: ["application/json"],
        },
        playlist: {
          schema: "https://trapcard.app/protocols/playlist",
          dataFormats: ["application/json"],
        },
        binaryImage: {
          dataFormats: ["image/png", "mp3", "mp4", "gif"],
        },
        comment: {
          schema: "https://trapcard.app/protocols/comment",
          dataFormats: ["application/json"],
        },
      },
      structure: {
        album: {
          $actions: [{ who: "author", of: "album", can: "write" }],
        },
        playlist: {
          $actions: [{ who: "recipient", of: "playlist", can: "read" }],
          binaryImage: {
            $actions: [{ who: "author", of: "playlist", can: "write" }],
          },
          comment: {
            $actions: [
              { who: "anyone", can: "write" },
              { who: "anyone", can: "read" },
              { who: "author", of: "comment", can: "delete" },
              { who: "recipient", of: "comment", can: "delete" },
              { who: "author", of: "comment", can: "update" },
            ],
          },
        },
      },
    },
  },
});
