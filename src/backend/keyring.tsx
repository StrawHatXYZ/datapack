import { LocalStorageDb } from "./db";
import bcrypt from "bcryptjs-react";
const salt = bcrypt.genSaltSync(10);

// This is a simple example of how to use the keyring to store a password
// and then retrieve it.  The password is encrypted using bcrypt and then
// stored in the keyring.  The password is then retrieved from the keyring
// and decrypted using bcrypt.  The decrypted password is then compared to
// the original password to verify that the password was decrypted correctly.

export async function setEncryptedKeyring(key: string, value: string) {
    const ciphertext = await bcrypt.hashSync(value, salt);
    await LocalStorageDb.set(key, ciphertext);
    console.log("setEncryptedKeyring: " + key + " = " + ciphertext);
}

export async function checkEncryptedKeyring(key: string, value: string) {
    const hash = await LocalStorageDb.get(key);
    const isValid = await bcrypt.compareSync(value, hash);
    console.log("checkEncryptedKeyring: " + key + " = " + hash + " isValid = " + isValid);
    return isValid;
}
