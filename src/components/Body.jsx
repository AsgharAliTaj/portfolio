import {MdOutlineWorkHistory} from 'react-icons/md';
import {FaPenToSquare , FaGolang} from 'react-icons/fa6';
import {GiTechnoHeart} from 'react-icons/gi';
import {FaCss3Alt} from 'react-icons/fa';
import {BiLogoTailwindCss, BiLogoJavascript, BiLogoNodejs, BiLogoPhp, BiLogoPostgresql, BiLogoMongodb} from 'react-icons/bi';
import {FaBootstrap, FaLaravel , FaDocker} from'react-icons/fa';
import {GrReactjs} from 'react-icons/gr'
import {SiChakraui,  SiMysql} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai';
import {BsGit} from 'react-icons/bs';

import ProfilePic from '../assets/profile_pic.jpg';

const Body = () => {
  return (
    <article className="pt-[60px] md:pt-[65px] max-w-[535px] m-auto px-[20px]">

    <div className="flex items-center justify-center w-auto">
      <div className="px-2 text-center justify-center font-normal tracking-tight p-[10px] w-full rounded-md shadow-sm  bg-profile-heroLight dark:bg-profile-heroDark">Hello, I&apos;m a software developer from Pakistan.
      </div>
    </div>
    
    <div className="md:flex mt-[20px] md:justify-between">
    <div className="md:basis-3/4 ">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Asghar Ali Taj</h1>
      <p className="text-md">Digital Craftsman (Developer / Designer)</p>
    </div>
      <ProfilePicture />
    </div>
      <Work />
     <Technologies />
    </article>
  )
}

const ProfilePicture = () => {
  return (
<div className="flex justify-center md:block pt-5 md:p-1">
    <img src={ProfilePic} alt="" className="rounded-full w-[90px] h-[90px] bg-purple-500 shrink-0 border-[2px] border dark:border-gray-500 border-white shadow-md  md:basis-1/4" />
    </div>
  )
}


const Work = () => {
  return (
    <div className="mt-[24px]">
    <h3 className="font-bold text-xl text-cyan-700 dark:text-pink-400">Work<MdOutlineWorkHistory className="inline-block mx-[3px] mb-[3px]" size='20' /> </h3>
    <p className="tracking-tight text-[15px]  font-normal text-justify leading-relaxed indent-[16px]   hyphens-auto">Asghar Ali Taj is a full stack developter  and a freelancer using several cutting edge technologies of the present. He likes to plan everything from scratch and use minimal and consistent approach to the problems of both real-life and coding. When he is not working on a project, He enjoys watching anime, play game, hangout with friends and family. Currently looking for a job.</p>
    <div className="flex justify-center align-center mt-3">
      <button className="text-[15px] tracking-tighter dark:text-profile-dark text-profile-light bg-teal-600 dark:bg-teal-300 hover:dark:bg-teal-400 hover:bg-teal-700 px-3 py-2 rounded-md hover:mouse-cursor font-bold">My Protpolio <FaPenToSquare className="inline-block mx-[3px] mb-[3px]" size='15' /> </button>
    </div>
    </div>
  )
}

const Technologies = () => {
  return (
    <div className='mt-[24px]'>
    <div className="flex flex-col justify-center items-center">
    
    <h3 className="font-bold text-xl text-cyan-700 dark:text-pink-400">Technologies<GiTechnoHeart className="inline-block mx-[3px] mb-[3px]" size='20' /></h3>
  </div>

    <div className="flex-row align-center justify-center mt-[15px] ">
    <p className="font-bold text-md">Frontend 

      <AiFillHtml5 size='25' className=" inline-block text-orange-400" />
      <FaCss3Alt size='25' className=" inline-block text-orange-400" />
      <BiLogoJavascript size='25' className=" inline-block text-orange-400"  />
      <GrReactjs size='25' className=" inline-block text-orange-400"  />
      <FaBootstrap size='25' className=" inline-block text-orange-400"  />
      <SiChakraui size='25' className=" inline-block text-orange-400" />
      <BiLogoTailwindCss size='25' className=" inline-block text-orange-400" />
    </p>

    </div>

    <div className="flex flex-row  mt-[15px]">
    <p className="flex flex-wrap gap-1 font-bold">Backend 
      <BiLogoNodejs size='25' className=" inline-block text-orange-400"/>
      <FaGolang size='28' className=" inline-block text-orange-400" />
      <BiLogoPhp size='25' className=" inline-block text-orange-400"/>
      <FaLaravel size='22' className=" inline-block text-orange-400"/>
    </p>
    </div>
    
    <div className="flex flex-row  mt-[15px]">
    <p className="flex flex-wrap gap-1 font-bold">Database 
      <BiLogoPostgresql size='25' className="inline-block text-orange-400"/>
      <BiLogoMongodb size='25' className="inline-block text-orange-400"/>
      <SiMysql size='25' className="inline-block text-orange-400"/>
    </p>
    </div>
    <div className="flex flex-row  mt-[15px]">
    <p className="flex flex-wrap gap-1 font-bold">Utilities
      <BsGit size='25' className="inline-block text-orange-400"/>
      <FaDocker size='25' className="inline-block text-orange-400"/>
    </p>
    </div>
    </div>
  )

}

const Bio = () => {
  return (
    <div>
    </div>
  )
}

export default Body;
