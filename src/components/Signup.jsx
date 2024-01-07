import React from 'react';
const Signup = ({ setView }) => {
  const handleLoginClick = () => {
    setView('login');
  };

  return (
    <div>
    <body></body>
      <center>
    <h1>Adopt Spot</h1>
    
    </center>
    <center>
      <form class="cl">
    <center>
      
      <h2 >Sign Up</h2>
      <label class="la"><br></br><input type="email" placeholder="Enter Email" name="username" required></input> </label><br></br><br></br>
      <label class="la"><br></br><input type="password" placeholder="Enter Password" name="password" required></input> </label><br></br><br></br>
      <label class="la"> <input type="checkbox"></input>Remember me</label><br></br><br></br>
      <a href="#">Need help?</a><br></br><br></br>
      
      <button type="submit">Sign Up</button>
      <p className='already'>Already an user ? click login</p>
      <button onClick={handleLoginClick}>Login</button>
      {/* <a href="">login</a> */}
    </center>
    </form>
    </center>

    </div>
  );
};

export default Signup;