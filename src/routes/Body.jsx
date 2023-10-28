import {Link} from "react-router-dom";

import {MdOutlineWorkHistory, MdCastForEducation} from 'react-icons/md';
import {FaPenToSquare , FaGolang} from 'react-icons/fa6';
import {GiTechnoHeart} from 'react-icons/gi';
import {FaCss3Alt} from 'react-icons/fa';
import {BiLogoTailwindCss, BiLogoJavascript, BiLogoNodejs, BiLogoPhp, BiLogoPostgresql, BiLogoMongodb, BiSolidLike} from 'react-icons/bi';
import {FaBootstrap, FaLaravel , FaDocker} from'react-icons/fa';
import {GrReactjs} from 'react-icons/gr'
import {SiChakraui,  SiMysql} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai';
import {BsGit} from 'react-icons/bs';
import {IoShareSocialSharp} from 'react-icons/io5';

import ProfilePic from '../assets/profile_pic.jpg';

const Body = () => {
  return (
    <article>
    <Hero />
    <div className="md:flex mt-[20px] md:justify-between">
    <div className="md:basis-3/4 ">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Asghar Ali Taj</h1>
      <p className="tracking-tighter">Digital Craftsman ( Developer / Designer )</p>
    </div>
      <ProfilePicture />
    </div>
      <Work />
      <Technologies />
      <Bio />
      <Likes />
    </article>
  )
}

const Hero = () => {
  return (
<div className="flex items-center justify-center w-auto">
      <div className="px-2 text-md text-center justify-center font-normal tracking-tight p-[10px] w-full rounded-md shadow-sm  bg-profile-heroLight dark:bg-profile-heroDark">Hello, I&apos;m a software developer from Pakistan.
      </div>
    </div>
  )
}

const ProfilePicture = () => {
  return (
<div className="flex justify-center md:block pt-5 md:p-1">
    <img src={ProfilePic} alt="" className="rounded-full w-[100px] h-[100px] bg-green-500 shrink-0 border-[2px] border-[3px] border-white shadow-lg  md:basis-1/4" />
    </div>
  )
}


const Work = () => {
  return (
    <div className="mt-[24px]">
    <h3 className="font-bold text-xl text-cyan-700 dark:text-pink-400">Work<MdOutlineWorkHistory className="inline-block mx-[3px] mb-[3px]" size='20' /> </h3>
    <p className="tracking-tight text-[16px]  font-normal text-justify subpixel-antialiased leading-relaxed indent-[16px] hyphens-auto">Asghar Ali Taj is a full stack developer and a freelancer using several cutting edge technologies of the present. He likes to plan everything from scratch and use minimal and consistent approach to the problems of both real-life and coding. When he is not working on a project, He enjoys watching anime, playing games, reading books, hangout with friends and family.</p>
    <div className="flex justify-center align-center mt-3">
      <Link to={'works'}><div className=" cursor-pointer text-[15px] tracking-tighter dark:text-profile-dark text-profile-light bg-pink-600 dark:bg-teal-300 hover:dark:bg-teal-400 hover:bg-pink-700 px-3 py-2 rounded-md hover:mouse-cursor font-bold shadow-sm">My Projects<FaPenToSquare className="inline-block mx-[3px] mb-[3px]" size='15' /></div></Link>
    </div>
    </div>
  )
}

const Technologies = () => {
  return (
    <div className='mt-[28px]'>

    <div className="flex flex-col">
    
    <h3 className="font-bold text-xl  text-cyan-700 dark:text-pink-400">Technologies<GiTechnoHeart className="inline-block mx-[3px] mb-[3px]" size='20' /></h3>
  </div>

    <div className="flex flex-wrap gap-2  mt-[15px]">
    <div className="w-[70px] font-bold text-sm">Frontend</div>
      <AiFillHtml5 size='25' className="text-frontend-html" />
      <FaCss3Alt size='25' className="text-frontend-css" />
      <BiLogoJavascript size='25' className="text-frontend-js" />
      <GrReactjs size='25' className="text-frontend-react"  />
      <FaBootstrap size='25' className="text-frontend-bootstrap"  />
      <SiChakraui size='25' className="text-frontend-chakraUi" />
      <BiLogoTailwindCss size='25' className="text-frontend-tailwind " />
    </div>

    <div className="flex flex-wrap gap-2 mt-[15px]">
    <div className="w-[70px] font-bold text-sm">Backend</div>
      <BiLogoNodejs size='25' className="text-backend-node "/>
      <FaGolang size='28' className="text-backend-go " />
      <BiLogoPhp size='25' className="text-backend-php "/>
      <FaLaravel size='22' className="text-backend-laravel "/>
    </div>
    
    <div className="flex flex-wrap gap-2 mt-[15px]">
    <div className="w-[70px] font-bold text-sm">Database</div>
      <BiLogoPostgresql size='25' className="text-database-postgresql "/>
      <BiLogoMongodb size='25' className="text-database-mongodb "/>
      <SiMysql size='25' className="text-databse-mysql "/>
    </div>

    <div className="flex flex-wrap gap-2  mt-[15px]">
    <div className="w-[70px] font-bold text-sm">Utilities</div>
      <BsGit size='25' className="text-utils-git"/>
      <FaDocker size='25' className="text-utils-docker "/>
    </div>
    </div>
  )

}

const Bio = () => {
  return (
    <div className="mt-[28px]">
    <h3 className="font-bold text-xl text-cyan-700 dark:text-pink-400">Bio<MdCastForEducation className="inline-block mx-[3px] mb-[3px]" size='20'/></h3>

    <div className="mt-[5px]">
    <div className="pl-[50px] -indent-[50px] mt-1"><span className="font-bold mr-3">2012</span>Graphics Designing From <span className="font-bold">Arena Multimedia</span></div>

<div className="pl-[50px] -indent-[50px] mt-1"><span className="font-bold mr-3">2018</span>Software Enginnering From <span className="font-bold">Aptech Education Network</span></div>


<div className="pl-[50px] -indent-[50px] mt-1"><span className="font-bold mr-3">2022</span>Bachelor&apos;s degree in Economics and Psychology as minor from <span className="font-bold">University of Karachi</span></div>

<div className="pl-[50px] -indent-[50px] mt-1"><span className="font-bold mr-3">2023</span>Master&apos;s degree in Economics and Mathametical Economics <span className="font-bold">University of Karachi</span></div>
    </div>
    </div>
  )
}

const Likes = () => {
  return (
    <div className="mt-[28px]">

    <h3 className="font-bold text-xl text-cyan-700 dark:text-pink-400">likes<BiSolidLike className="inline-block mx-[3px] mb-[3px]" size='20'/></h3>
    <div className="indent-[16px] text-justify">Art, Music, Playing flute, anime, books, Nature, Programming and learning about new things daily.</div>
    </div>
  )
}

export default Body;
