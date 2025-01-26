import React from 'react';
import image from '../../public/1.png'
import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin, BiLogoYoutube } from 'react-icons/bi';

const Home = () => {
  return (
    <div id='Home' className='flex min-h-screen w-full items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-8 p-5 text-center'>
        <img src={image} alt="Profile Photo" className='w-[250px] sm:w-[300px] rounded-full' />
        <div className='space-y-1 sm:space-y-3'>
            <h1 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>Faisal Shahzad</h1>
            <h3 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>Full Stack Developer</h3>
            <p className='max-w-[500px] text-sm text-gray-500'>Skilled in developing scalable software solutions, with expertise in modern technologies and a focus on problem-solving and continuous improvement.</p>
        </div>

        <div className='flex gap-3'>
            <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
            <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
            <BiLogoYoutube className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
            <BiLogoFacebook className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
        </div>
      </div>
    </div>
  )
}

export default Home