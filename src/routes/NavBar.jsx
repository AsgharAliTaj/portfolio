import {Link, NavLink} from "react-router-dom";

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
  <div className="flex items-center max-w-[768px] justify-between mx-auto px-5 md:px-10 py-2 ">
    <div className="gap-1 hover:text-teal-600 dark:hover:text-pink-400">
    <Link to={'/'}>
      <FaLaptopCode className="inline-block mr-1" size ='22'/>
      <p className="font-bold tracking-tighter inline-block max-[240px]:hidden"> Asghar Ali Taj</p>
    </Link>
    </div>

    <ul className="hidden basis-2/3  md:flex gap-6 text-[13px]">
      <MenuItems />
    </ul>
    <div className="flex flex-wrap gap-1">
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
    themeIcon = <FaMoon className="text-gray-500 hover:text-gray-800 hover:cursor-pointer" size='24'/>
  } else {
    themeIcon = <FaSun className="text-orange-500 hover:text-orange-400 hover:cursor-pointer" size='24'/> 
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
    <GiHamburgerMenu className="dark:text-gray-200 text-gray-900 hover:cursor-pointer item-center" size='24'/>
    </button>

  <div className={`${ display ? 'block': 'hidden'} z-10 rounded-lg w-44  absolute top-[55px] right-[20px] shadow-lg dark:bg-cyan-700 bg-pink-300`}>
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
<NavLink to={'/works'} className={({isActive}) => isActive? "nav-link-active" : "nav-link"}><li><FaPenToSquare className="inline-block pb-1" size='18' />Works</li></NavLink>

      <a className="cursor-pointer block px-4 py-2 hover:bg-gray-600 hover:text-gray-200 dark:hover:bg-gray-600 rounded-md" href="https://github.com/AsgharAliTaj/portfolio"><li><AiFillGithub className="inline-block pb-1" size='18'/>Source</li></a>
    </>
  )
}

export default NavBar;
