import { Client, Account, ID, Avatars } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aora",
  projectId: "66c72761003dce2d3dff",
  databaseId: "66c72925003ada739da1",
  userCollectionId: "66c7294a003a2670a6a9",
  videoCollectionId: "66c729640007744d9ab6",
  storageId: "66c72ab8003378f9925c",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {}
}

export const createUser = async (username, email, password) => {
  try {
    const newAccount = await account.create(
      ID.unique,
      username,
      email,
      password
    );
    if (!newAccount) throw Error();
    const avatar = avatars.getInitials(username);
    await signIn(email, password);
  } catch (err) {
    console.log(err);
  }
};
