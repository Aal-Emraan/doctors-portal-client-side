import initializeAuthentication from '../Pages/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from 'react';



initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
        }).catch((error) => {;
            setError(error.message);
        });
    }
    
    const SignUp = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const logout = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
            setError(error.message);
          });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
          });
          return () => unsubscribed;
    }, [])

    return {
        user,
        error,
        signInWithGoogle,
        SignUp,
        login,
        logout
    }
}

export default useFirebase;