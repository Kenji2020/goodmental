import firebaseInitialization from "./firebase.init";
import { getAuth,createUserWithEmailAndPassword,updateProfile, 
onAuthStateChanged,signInWithEmailAndPassword,signOut, sendPasswordResetEmail, deleteUser} from 'firebase/auth';

firebaseInitialization();

const auth = getAuth();

export {auth,createUserWithEmailAndPassword,updateProfile,
onAuthStateChanged,signInWithEmailAndPassword,signOut, sendPasswordResetEmail, deleteUser}