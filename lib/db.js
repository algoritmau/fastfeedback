import firebase from './firebase';

const firestore = firebase.firestore();

// Function to create user on db
export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

// Function to create site on db
export function createSite(payload) {
  return firestore.collection('sites').add(payload);
}
