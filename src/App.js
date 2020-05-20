import React, { useState }from 'react';
import GoogleLogin  from 'react-google-login';
import './App.css';

function App() {

  const [name,setName] = useState("");

  const [email,setEmail] = useState("");
  
  const [url,setUrl] = useState("");
  
  
    const responseGoogle = (response) => {
      setName(response.profileObj.name);
      setEmail(response.profileObj.email);
      setUrl(response.profileObj.imageUrl);
    };

  return (
  <div className="App">

      <h1>Login with Google</h1> 
      <h2>Start editing </h2>
      <h2> welcome: {name}</h2>
      <h2>Email: {email}</h2>
      <img src={url} alt ={name}/>

      <GoogleLogin
        clientId="914887871782-bo6nkcig7o0c5vu61f1k3aoosdtbct40.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
       />
    </div>
  );
}

export default App;
