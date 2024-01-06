/*
Needs globalThis.crypto polyfill.
This is *not* the crypto you're thinking of.
It's the original crypto...CRYPTOGRAPHY.
*/
import { webcrypto } from "node:crypto";
import { Web5 } from '@web5/api';
'import { Web5 } from '@web5/api'

const { web5, did: aliceDid } = await Web5.connect();

  // Create the record
  const { record } = await web5.dwn.records.create({
    data: 'Hello Web5',
    message: {
      dataFormat: 'text/plain',
    },
  });

  // Read the record
  const readResult = await record.data.text();

const { web5, did: userDid } = await Web5.connect();
const { web5, did } = await Web5.connect({
    techPreview: {
      dwnEndpoints: ['https://dwn.trapcard.app/'],
    },
  });

  const { web5, did } = await Web5.connect({
    agent: identityAgent,
    connectedDid: existingDid,
  });
  const { web5, did } = await Web5.connect({
    sync: '5s',
  });
  const { web5, did } = await Web5.connect({
    agent: identityAgent,
    connectedDid: existingDid,
  });
  const { protocol, status } = await web5.dwn.protocols.configure({
    message: {
      definition: {
        "protocol": "https://photos.org/protocol",
        "published": false,
        "types": {
          "album": {
            "schema": "https://photos.org/protocol/album",
            "dataFormats": ["application/json"]
          },
          "photo": {
            "schema": "https://photos.org/protocols/photo",
            "dataFormats": ["application/json"]
          },
          "binaryImage": {
            "dataFormats": ["image/png", "jpeg", "gif"]
          },
          "comment": {
            "schema": "https://photos.org/protocols/comment",
            "dataFormats": ["application/json"]
          }
        },
        "structure": {
          "album": {
            "$actions": [
              { "who": "author", "of": "album", "can": "write" }
            ]
          },
          "photo": {
            "$actions": [
              { "who": "recipient", "of": "photo", "can": "read" }
            ],
            "binaryImage": {
              "$actions": [
                { "who": "author", "of": "photo", "can": "write" }
              ]
            },
            "comment": {
              "$actions": [
                { "who": "anyone", "can": "write" },
                { "who": "anyone", "can": "read" },
                { "who": "author", "of": "comment", "can": "delete" },
                { "who": "recipient", "of": "comment", "can": "delete" },
                { "who": "author", "of": "comment", "can": "update" }
              ]
            }
          }
        }
      }
    },
  });

  const { protocols, status } = await web5.dwn.protocols.query({
    message: {
      filter: {
        protocol: 'https://music.org/protocol',
      },
    },
  });

  // logs an array of protocol configurations installed on the user's DWN
  console.log(protocols);

  //Query protocol on someone else's DWN
  
  const { protocols } = await web5.dwn.protocols.query({
    from: bobDid,
    message: {
      filter: {
        protocol: 'https://music.org/protocol',
      },
    },
  });
  // Sorting protocols by dateCreated in descending order

  const { protocols, status } = await web5.dwn.protocols.query({
    message: {
      filter: {
        protocol: 'http://social-media.xyz',
      },
      dateSort: 'createdDescending',
    },
  });
  const recordText = await textRecord.data.text();
  const { record } = await web5.dwn.records.create({
    data: 'Hello World!',
    message: {
      dataFormat: 'text/plain',
    },
  });

  const { status } = await record.send(myDid);
  const response = await record.update({ data: "Hello', I'm updated" });
  const { record } = await web5.dwn.records.create({
    data: playlistJson,
    message: {
      recipient: 'did:example:alice',
      schema: 'https://schema.org/Playlist',
      dataFormat: 'application/json',
    },
  });
  // this creates a record, but does not store it in the user's local DWN
  const { record } = await web5.dwn.records.create({
    store: false,
    data: 'Hello again, World!',
    message: {
      recipient: 'did:example:alice',
      dataFormat: 'text/plain',
    },
  });
  // this creates a record and stores it in the user's local DWN
  const { record } = await web5.dwn.records.create({
    data: 'Hello World!',
    message: {
      dataFormat: 'text/plain',
    },
  });
  // this creates a record today to be published tomorrow
import { Temporal } from '@js-temporal/polyfill';

let today = Temporal.Now.instant();
let tomorrow = today.add({seconds: 86400});

const {record} = await web5.dwn.records.create({
  data: "This record will be created now and published tomorrow",
  message: {
    dataFormat: "text/plain",
    published: true,
    datePublished: tomorrow.toString({smallestUnit: 'microseconds' }),
  }
});
// Sorting records by dateCreated in ascending order
const response = await web5.dwn.records.query({
  message: {
    filter: {
      dataFormat: 'text/plain',
    },
    dateSort: 'createdAscending',
  },
});
// Reads the indicated record from the user's DWNs
let { record } = await web5.dwn.records.read({
  message: {
    filter: {
      recordId: recordId,
    },
  },
});

// assuming the record has a text payload
const text = await record.data.text();

// Reads the indicated record from Bob's DWNs
const { record } = await web5.dwn.records.read({
  from: bobDid,
  message: {
    filter: {
      recordId: recordId,
    },
  },
});

// assuming the record is a json payload
const data = await record.data.json();

const response = await web5.dwn.records.delete({
  from: did,
  message: { 
    recordId: recordId
  },
});

const { record } = await web5.dwn.records.create({
  data: 'Hello, Web5!',
  message: {
    dataFormat: 'text/plain',
  },
});
// Create a JSON record
const { record } = await web5.dwn.records.create({
  data: {
      content: "Hello Web5",
      description: "Keep Building!"
  },
  message: {
      dataFormat: 'application/json'
  }
});

// Create a JSON record
const { record } = await web5.dwn.records.create({
  data: {
      content: "Hello Web5",
      description: "Keep Building!"
  },
  message: {
      dataFormat: 'application/json'
  }
});

// Create a blob record
async function upload(event) {
  const blob = new Blob(event.currentTarget.files, { type: "image/png" });
  const { record } = await web5.dwn.records.create({
      data: blob,
      message: {
          dataFormat: "image/png"
      }
  });
  
}
// Create a file record
async function upload(event) {
  const file = event.currentTarget.files[0];
  const { status: fileStatus, record } = await web5.dwn.records.create({
      data: file,
      message: {
          schema: "https://schema.org/path/to/schema",
          dataFormat: "application/octet-stream"
      }
  });
  
}
// Create a mixed record
async function createMessage(username, messageText, imageFile) {
  let base64Image = null;
  
  if (imageFile) {
      const binaryImage = await imageFile.arrayBuffer();
      base64Image = btoa(
          new Uint8Array(binaryImage).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
          )
      );
  }

  const messageData = {
      username,
      message: messageText,
      image: base64Image
  };

  const { record } = await web5.dwn.records.create({
      data: messageData,
      message: {
          schema: "http://schema-registry.org/message",
          dataFormat: "application/json"
      },
  });
  
}
const { record } = await web5.dwn.records.create({
  data: signedVcJwt,
  message: {
    schema: 'EmploymentCredential',
    dataFormat: 'application/vc+jwt',
  },
});

// (optional) immediately send record to users remote DWNs
const { status } = await record.send(userDid);

const response = await web5.dwn.records.query({
  from: userDid,
  message: {
    filter: {
      schema: 'EmploymentCredential',
      dataFormat: 'application/vc+jwt',
    },
  },
});

const signedVcJwt = await response[0].data.text();


  /*
  send the record to the user's remote DWNs. Only needed
  if it's a record that cannot wait for sync to occur.
  */
  const { status: myDidStatus } = await record.send(myDid);

  // send the newly generated record to Bob's DWNs
  const { status: bobStatus } = await record.send(bobDid);

  // logs an array of protocol configurations installed on Bob's DWN
  console.log(protocols);
// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

useEffect(() => {

    const initWeb5 = async () => {
      // @ts-ignore
      const { Web5 } = await import('@web5/api');

      try {
        const { web5, did } = await Web5.connect({sync: '5s'});
        setWeb5(web5);
        setMyDid(did);
        console.log(web5);
        if (web5 && did) {
          console.log('Web5 initialized');
          // await configureProtocol(web5, did);
        }
      } catch (error) {
        console.error('Error initializing Web5:', error);
      }
    };

    initWeb5();

}, []);