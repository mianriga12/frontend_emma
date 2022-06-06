import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCJroAzhn5NlXg964SY7ZkVcnHMT0mnWTs",
  authDomain: "iot-data-science.firebaseapp.com",
  projectId: "iot-data-science",
  storageBucket: "iot-data-science.appspot.com",
  messagingSenderId: "933191190231",
  appId: "1:933191190231:web:6598d835ba310ce1a8d292",
  measurementId: "G-26586WKRRM"
};
!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid
  }
}


export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null

    onChange(normalizedUser)
  })
}

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase
  .auth()
  .signInWithPopup(googleProvider)
}

export const addFormulario = ({ avatar, content, userId, userName }) => {
  return db.collection("formulario").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  })
}

export const fetchLatestFormulario = () => {
  return db
    .collection("formulario")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data
        console.log(createdAt)

        const date = new Date(createdAt.seconds * 1000)
        const normalizedCreatedAt = new Intl.DateTimeFormat("es-ES").format(
          date
        )

        return {
          ...data,
          id,
          createdAt: normalizedCreatedAt,
        }
      })
    })
}