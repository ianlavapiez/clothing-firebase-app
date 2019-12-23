import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCQddQq95SqCoZDa2M1hhvIjywgu1moWyw',
  authDomain: 'crwn-db-81c04.firebaseapp.com',
  databaseURL: 'https://crwn-db-81c04.firebaseio.com',
  projectId: 'crwn-db-81c04',
  storageBucket: 'crwn-db-81c04.appspot.com',
  messagingSenderId: '259742912814',
  appId: '1:259742912814:web:61443374d15aefda'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
