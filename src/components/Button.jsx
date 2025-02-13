// import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ name }) => {
  return (
    <div>
      <button className="py-2 px-5 my-3 mx-1 bg-gray-300 rounded-xl cursor-pointer">{name}</button>
    </div>
  );
};

export default Button;









/**
 * DEBOUNCING
 * 
 * typing slow = 200ms
 * typing fast = 30ms
 * 
 * Performance :
 *  - iphone pro max = 14 letters * 1000 = 14000
 *  - with debouncing = 3 API calls * 1000 = 3000
 * 
 * Debouncing with 200ms
 * - if the difference between the 2 key strokes is less than 200ms - DECLINE THE API CALL
 * - if the difference between the 2 key strokes is more than 200ms - ACCEPT THE API CALL
 * 
 * 
 * FLIPKART IS A GOOD EXAMPLE FOR DEBOUNCING BUT YTUBE IS HAVING VERY LESS DEBOUNCING TECHNIQUES AS IT WANTS TO GIVE BETTER USER EXPERIENCE
 * 
 */