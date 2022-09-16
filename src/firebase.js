import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyDXUGvixe02xyra3tslDsFQkS4FvRFnILU",
   authDomain: "netflix-clone-d28cf.firebaseapp.com",
   projectId: "netflix-clone-d28cf",
   storageBucket: "netflix-clone-d28cf.appspot.com",
   messagingSenderId: "301557834672",
   appId: "1:301557834672:web:335edb8857808c089aac75"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig)
 const db = firebaseApp.firestore()
 const auth = firebase.auth()

 export {auth}
 export default db