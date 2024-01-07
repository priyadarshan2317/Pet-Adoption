import React from 'react';
const Login = ({ setView }) => {
  const handleSignupClick = () => {
    setView('signup');
  };

  return (
<div class="main" >
<body></body>
      <center>
    <h1>Adopt Spot</h1>
    <h4>Find your Fur-Ever Friend ! </h4>
    </center>
    <center>
      <form class="cl">
    <center>
      
      <h2 >Login</h2>
      <label class="la"><br></br><input type="email" placeholder="Enter Email" name="username" required></input> </label><br></br><br></br>
      <label class="la"><br></br><input type="password" placeholder="Enter Password" name="password" required></input> </label><br></br><br></br>
      <label class="la"> <input type="checkbox"></input>Remember me</label><br></br><br></br>
      <a href="#">Need help?</a><br></br><br></br>
      
      <button type="submit">Login</button>
      <p class="p">New to Adopt Spot? click sign up</p>
      <button onClick={handleSignupClick}>Go to Signup</button>
      {/* <a href="">Sign Up</a> */}
    </center>
    </form>
    </center>
 
</div>
  );
};

export default Login;                                     