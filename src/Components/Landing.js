import React from 'react';


import '../Styles/App.css'
import Avatar from '../images/myAvatar.png'


export default function Landing() {
  

  return (
      <div className='landing-div'>
      <div className='landing-card'>
      <img src={Avatar}></img>
   <p>Hello, welcome to my personal website and portfolio!</p>
   <a href='#body-2'>
   <button type="button" class="btn btn-primary">Click here to find out more about me</button>
</a>
   </div>
    </div>
  );
}
