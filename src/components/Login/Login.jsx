import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  // sigInWithPopup  dile she google er server e jabe then amake bolbe j thik moto paisi naki pai nai
  const handlGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => {
        console.log("Error", error.message);
      });
  };
  return (
    <div>
      <button onClick={handlGoogleSignIn}> Login</button>
    </div>
  );
};

export default Login;
