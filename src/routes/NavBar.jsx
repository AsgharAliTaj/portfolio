import {Link} from "react-router-dom";

import {useState, useEffect, useRef} from "react";
import useDarkSide from '../hooks/useDarkSide';

import {
  FaMoon,
  FaSun,
  FaLaptopCode,
} from 'react-icons/fa';

import {FaPenToSquare} from 'react-icons/fa6'

import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillGithub} from 'react-icons/ai';


const NavBar = () => {
  return (
<nav className="fixed w-full shadow-sm h-auto bg-white/30 dark:bg-profile-dark/50">
  <div className="mx-auto flex  items-center max-w-[768px] justify-between px-5 md:px-10 py-2 md:py-2">
    <Link to={'/'}><div className="flex mr-8 gap-1">
      <FaLaptopCode size ='24'/>
      <p className="font-sans font-bold text-[17px] tracking-tighter ">Asghar Ali Taj</p>
    </div></Link>
    <ul className="hidden grow justify-start gap-6 md:flex text-[13px]">
      <MenuItems />
    </ul>
    <div className="flex gap-2">
        <ThemeIcon />
      <div className="block md:hidden">
        <DropDownMenu />
      </div>
    </div>
  </div>
</nav>
  )
}

const ThemeIcon = () => {
  const [colorTheme, setTheme] = useDarkSide();

  let themeIcon;
  if (colorTheme === 'dark') {
    themeIcon = <FaMoon className="text-gray-500 hover:text-gray-800 hover:cursor-pointer" size='22'/>
  } else {
    themeIcon = <FaSun className="text-orange-500 hover:text-orange-400 hover:cursor-pointer" size='22'/> 
  }

  const handleMode = () => setTheme(colorTheme);
  return (
    <button className="p-1" onClick={handleMode}>
      {themeIcon}
    </button>
  );
}

const DropDownMenu = () => {
  const [display, setDisplay] = useState(false);
  let menuRef = useRef();

  useEffect(()=> {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDisplay(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  },[])

  return (
    <div onClick={()=> {setDisplay(!display)}} ref={menuRef}>
    <button  className="border border-gray-500 p-1 rounded-md">
    <GiHamburgerMenu className="dark:text-gray-200 text-gray-900 hover:cursor-pointer item-center" size='20'/>
    </button>

  <div className={`${ display ? 'block': 'hidden'} z-10 rounded-lg w-44  absolute top-15 right-10 shadow-lg dark:bg-cyan-700 bg-pink-300`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
    <MenuItems />
    </ul>
</div>
    </div>
  )
}

const MenuItems = () => {
  return (
    <>
<Link to={'/works'} className="cursor-pointer block px-4 py-2 hover:bg-gray-600 hover:text-gray-200 dark:hover:bg-gray-600 rounded-md"><li><FaPenToSquare className="inline-block pb-1" size='18' />Works</li></Link>

      <a className="cursor-pointer block px-4 py-2 hover:bg-gray-600 hover:text-gray-200 dark:hover:bg-gray-600 rounded-md" href="https://github.com/AsgharAliTaj/portfolio"><li><AiFillGithub className="inline-block pb-1" size='18'/>Source</li></a>
    </>
  )
}

export default NavBar;