
import {  useState ,useEffect } from 'react'
import { auth} from '../assets/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import UserLoggedIn from './UserSignedIn';
import UserLoggedOut from './UserSignedOut';
export default function SignInButton(){
    const [currUser,setCurrUser]=useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setCurrUser(currentUser); 
        });
        return () => unsubscribe();
      }, []);
        
    return (
        <>
           {currUser ? (<UserLoggedIn />): (<UserLoggedOut reqFrom={"signInButton"} />)}
        </>
    )
}



