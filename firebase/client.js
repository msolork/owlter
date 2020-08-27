import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCuKkT7lVhYlk7HKJ28FVG0MXxauRTtBC8",
  authDomain: "owlter.firebaseapp.com",
  databaseURL: "https://owlter.firebaseio.com",
  projectId: "owlter",
  storageBucket: "owlter.appspot.com",
  messagingSenderId: "1028470881690",
  appId: "1:1028470881690:web:51dec685d474d5aafd4e23",
  measurementId: "G-VKF5HB6TBT"
};

!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const {displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = mapUserFromFirebaseAuthToUser(user)
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}