import React from 'react';
import MyImage from "../assets/image16.png"

 export const Footer = () => {
  const headerStyle = {
    // background: MyImage,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    color: 'white', // Text color
    //padding: '20px', // Adjust padding as needed
    textAlign: 'center',
    padding: 0
  };


  return (
    <footer style={headerStyle}>
      <img className='mt-0 w-[100%] 'src={MyImage}></img>
      {/* Add other header content as needed */}
    </footer>
  );
};




