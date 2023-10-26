import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaXTwitter} from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="mt-[45px]">
      <Social />

    <div className="text-center text-gray-500 text-sm h-[60px] mt-3" >
      &copy; {new Date().getFullYear()} Asghar Ali Taj. All Rights Reserved.
    </div>
    </div>
  )
}

const Social = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3">

    <a href="https://github.com/AsgharAliTaj"><AiFillGithub size='30' className="dark:hover:text-teal-500 hover:text-pink-500"/></a>

<a href="https://pk.linkedin.com/in/asghar-ali-taj-ab63bb282"><AiFillLinkedin size='30' className="dark:hover:text-teal-500 hover:text-pink-500"/></a>

<a href="https://github.com/AsgharAliTaj"><FaXTwitter size='30' className="dark:hover:text-teal-500 hover:text-pink-500"/></a>

<a href="https://github.com/AsgharAliTaj"><AiOutlineInstagram size='30' className="dark:hover:text-teal-500 hover:text-pink-500"/></a>
    </div>
  )
}

export default Footer
