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