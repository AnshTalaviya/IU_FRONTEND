import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Background graphic elements */}
      <div className="absolute w-full h-full overflow-hidden">
        {/* Semi-transparent background image */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        ></div>
        
        {/* Green glowing orbs */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-green-500 rounded-full filter blur-[80px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500 rounded-full filter blur-[80px] opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-400 rounded-full filter blur-[100px] opacity-10"></div>
        
        {/* Decorative icons */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[20%] opacity-10 text-green-300">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute top-[60%] right-[10%] opacity-10 text-green-300">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.636 7H17.648" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute bottom-[20%] left-[15%] opacity-10 text-green-300">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12.2H15" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 16.2H12.38" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundEffects;