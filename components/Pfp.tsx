import React from 'react';

const Pfp = () => {
  return (
    <div className="h-32 w-32 rounded-full md:h-44 md:w-44">
      <a href="">
        <img

          src="/den.jpeg"
          alt="profile"
          className="rounded-full object-cover h-full w-full"
        />
      </a>
    </div>
  );
};

export default Pfp;
