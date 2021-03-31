import * as openpgp from "openpgp";
const alphanum = "aAbBcCdDeEfFgGHhIIJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
  ""
);
export const random = (size: number, usePrefix: boolean = false) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(alphanum[Math.floor(Math.random() * alphanum.length)]);
  }
  const base = result.join("");
  if (!usePrefix) return base;
  return "TEST" + base.substr(0, base.length - 4);
};

export function createPublicKeyfromString(key: string) {
  // const publicKey = openpgp.readKey({ armoredKey: key });
  // return publicKey;
}

export const encodeMessage = async (
  publicKey: openpgp.Key,
  message: string
) => {
  // const encrypted = await openpgp.encrypt({
  //   message: openpgp.Message.fromText(message), // input as Message object
  //   publicKeys: publicKey // for encryption
  // });
  // return encrypted;
};

export const EncodeMessageWithPublicKeyString = async (
  key: string,
  message: string
) => {
  // const publicKey = await createPublicKeyfromString(key);
  // const encoded = await encodeMessage(publicKey, message);
  // return encoded;
};
