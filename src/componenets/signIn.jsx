
import {  useState ,useEffect } from 'react'
import { auth} from '../assets/firebase';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import UserLoggedIn from './UserSignedIn';
import UserLoggedOut from './UserSignedOut';
export default function SignInButton(){
    const [err,setErr]=useState("");
    const [currUser,setCurrUser]=useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setCurrUser(currentUser); 
        });
        return () => unsubscribe();
      }, []);
        async function signOutFromApp(){
            try{
               await signOut(auth);
            } catch(err)
            {
                // console.log(err)
                setErr(err.message);
            }
        }

    return (
        <>
           {currUser ? (<UserLoggedIn user={currUser} signOutFromApp={signOutFromApp}/>): (<UserLoggedOut reqFrom={"signInButton"} />)}
        </>
    )
}



