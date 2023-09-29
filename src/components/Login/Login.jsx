import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  // sigInWithPopup  dile she google er server e jabe then amake bolbe j thik moto paisi naki pai nai
  const handlGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;

        setUser(loggedInUser);
      })
      .then((error) => {
        console.log("Error", error.message);
      });
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleGoogleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handlGoogleSignIn}>Login</button>
      )}

      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
