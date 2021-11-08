// import initializeAuthentication from '../Pages/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Pages/Firebase/firebase.init";



initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
        }).catch((error) => {;
            setError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }
    
    const SignUp = (email, password) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const login = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }

    const logout = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoading(false)
            } else {
                setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    }, [])

    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        SignUp,
        login,
        logout
    }
}

export default useFirebase;