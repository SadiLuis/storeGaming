import React from 'react'

const SocialLink = ({ icon }) => {
  return (
   <>
     <a href='https://www.linkedin.com/in/sadi-luis-alberto-rueda-fullstack/'  >
     <img
     src={icon}
     alt="icon/social"
     className="w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110 shadow-md shadow-black rounded-full "
   />
     </a>
   </>
  )
}

export default SocialLink