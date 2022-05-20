import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import{Button } from 'react-bootstrap'
import FirebaseInit from './firebase/firebase-init';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

function App() {
  const responseFacebook = (response) => {
    console.log(response);
    console.log(response.accessToken)
  }

  FirebaseInit();
  const provider = new GoogleAuthProvider();
  const handleGoogleSignedIn = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider).then((result) => {
    console.log({"auth_token" : result._tokenResponse.oauthIdToken});
    console.log({"username" : result._tokenResponse.fullName});
    console.log({"avatar" : result._tokenResponse.photoUrl});
  });
};
  return (
    <div className="App">
      <FacebookLogin
    appId="1351993755298694"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />   

    <button onClick={handleGoogleSignedIn}>Đăng nhập với Google</button>    
    </div>
  );
}

export default App;
