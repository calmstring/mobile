import * as SecureStore from "expo-secure-store";

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function get(key) {
  return await SecureStore.getItemAsync(key);
}

const secureStore = {
  save,
  get,
};
export default secureStore;
