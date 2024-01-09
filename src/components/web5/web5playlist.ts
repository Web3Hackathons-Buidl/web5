/*
Needs globalThis.crypto polyfill.
This is *not* the crypto you're thinking of.
It's the original crypto...CRYPTOGRAPHY.
*/
import { webcrypto } from "node:crypto";
import { Web5, RecordData } from "@web5/api";
import { Temporal } from "@js-temporal/polyfill";

async function createRecordExamples() {
  const { web5, did: aliceDid } = await Web5.connect();

  // Create the record
  const { record } = await web5.dwn.records.create({
    data: playlistJson,
    message: {
      recipient: "did:example:alice",
      schema: "https://trapcard.app/Playlist",
      dataFormat: "application/json",
    },
  });;

  // Read the record
  const readResult = await textRecord.data.text();

  // Other record creation examples...
  //Query protocol on someone else's DWN
  
  const { protocols } = await web5.dwn.protocols.query({
    from: bobDid,
    message: {
      filter: {
        protocol: 'https://trapcard.app/protocol',
      },
    },
  });

  // logs an array of protocol configurations installed on Bob's DWN
  console.log(protocols);
  const myDid = 'did:key:z6MkhvthBZDxVvLUswRey729CquxMiaoYXrT5SYbCAATc8V9';
  const didDocument = await web5.did.resolve(myDid);
}

async function runProtocolExamples() {
  const { web5 } = await Web5.connect();

  const { protocol, status } = await web5.dwn.protocols.configure({
    message: {
      definition: {
        // Protocol configuration details...
      },
    },
  });

  const { protocols: protocolsQuery1 } = await web5.dwn.protocols.query({
    message: {
      filter: {
        protocol: "https://trapcard.app/protocol",
      },
    },
  });

  // Other protocol query examples...
}

async function manipulateRecords() {
  const { web5 } = await Web5.connect();

  // Other record manipulation examples...
}

// Ensure globalThis.crypto polyfill is available
if (!globalThis.crypto) globalThis.crypto = webcrypto;

// Your useEffect equivalent in TypeScript
import { useEffect, useState } from "react";

const MyComponent: React.FC = () => {
  const [web5, setWeb5] = useState<Web5 | null>(null);
  const [myDid, setMyDid] = useState<string | null>(null);

  useEffect(() => {
    const initWeb5 = async () => {
      try {
        const { Web5 } = await import("@web5/api");
        const { web5, did } = await Web5.connect({ sync: "5s" });
        setWeb5(web5);
        setMyDid(did);
        console.log(web5);
        if (web5 && did) {
          console.log("Web5 initialized");
          // await configureProtocol(web5, did);
        }
      } catch (error) {
        console.error("Error initializing Web5:", error);
      }
    };

    initWeb5();
  }, []);

  return <div>Your JSX/React component here</div>;
};

// Functions and components usage
createRecordExamples();
runProtocolExamples();
manipulateRecords();

export default web5playlist;
