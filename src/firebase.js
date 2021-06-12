import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyB7bHojvoVJlQFDVDPT3d6KpfU1EtdQtCU",
  authDomain: "tinder-clone-96edc.firebaseapp.com",
  projectId: "tinder-clone-96edc",
  storageBucket: "tinder-clone-96edc.appspot.com",
  messagingSenderId: "790180708160",
  appId: "1:790180708160:web:6ec391956294573d4a44a5"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {db,provider}