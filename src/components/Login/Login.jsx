import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handlGoogleSignIn = () => {
    signInWithPopup(auth, provider).then(); // sigInWithPopup  dile she google er server e jabe then amake bolbe j thik moto paisi naki pai nai
  };
  return (
    <div>
      <button onClick={handlGoogleSignIn}> Login</button>
    </div>
  );
};

export default Login;
