import { Web5 } from "@web5/api";
import { Plugin } from "nuxt";

const web5Plugin: Plugin = async (nuxtApp) => {
  console.log("Plugin loaded");
  let web5: Web5 | null = null;
  let myDID: string | null = null;

  try {
    const { web5: connectedWeb5, did } = await Web5.connect({
      sync: "5s",
    });

    web5 = connectedWeb5;
    myDID = did;

    console.log("Here's your DID", myDID);
  } catch (error) {
    console.error("Error initializing Web5:", error);
  }

  return {
    provide: {
      web5,
      myDID,
    },
  };
};

export default web5Plugin;
