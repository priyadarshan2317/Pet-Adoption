import './Home.css';
import React from 'react';
import {Link} from 'react-router-dom';
function Home() {
  return (
    
    <body>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <div className="hi">
        <nav>
          <h2 className="logo">ADOPT<span> SPOT</span></h2>
          <ul>
            <li><Link to="#">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">SignUp</a></li>
          </ul>
          <button type="button">Contact Us</button>
        </nav>
      
   <div className="content">
        <h1>Welcome to Adopt Spot - <span>Your Gateway to Pet Happiness!</span></h1>
        <p>Looking for a loyal companion? You've come to the right place! At Adopt Spot, we specialize in connecting loving pets with caring families. Our platform offers a seamless adoption process, making it easier than ever to find your perfect match.
        
        Search through our database of adorable pets waiting for their forever homes. Whether you're looking for a playful pup, a cuddly kitten, or a gentle giant, we have a diverse range of animals eagerly waiting to meet you.</p>
        </div>
        
        </div>
        <footer>
        <div className="footercontainer">
          <div className='socialicons'>
            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/?hl=en"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com/?lang=en-in"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://support.google.com/answer/2451065?hl=en"><i class="fa-brands fa-google-plus"></i></a>
            <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
          </div>
          
          <div class="footernav">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Our Team</a>
              </li>
            </ul>
          </div>
          
          <div class="footerbottom">
            <p>&copy; 2023 Adopt Spot. All Rights Reserved.</p>
          </div>
          
        </div>
        </footer>
    </body>
  );
}

export default Home;
