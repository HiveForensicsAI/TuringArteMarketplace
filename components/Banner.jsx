import React from 'react';

const Banner = ({ name, childStyles, parentStyles }) => (
  <div className={`relative w-full flex items-center z-0 overflow-hidden nft-gradient ${parentStyles}`}>
    <p className={`font-light text-5xl font-poppins leading-70 >
      ${childStyles}`}
    >{name}
    </p>
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg -top-5 -left-14 -z-5 " />
    <div className="absolute w-72 h-72 sm:w-32 sm:h-32 rounded-full white-bg -bottom-20 -right-14 -z-5 " />
    <div className="absolute w-52 h-52 sm:w-32 sm:h-32 rounded-full white-bg -bottom-20 -z-1 " />
  </div>

);

export default Banner;
