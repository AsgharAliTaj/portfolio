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
<nav className="fixed w-full  shadow-md ">
  <div className="m-auto flex  items-center justify-between px-5 md:px-10 py-3 md:py-3">
    <div className="flex mr-8 gap-1">
      <span><FaLaptopCode className="dark:text-neutral-200" size ='24' /> </span>
      <p className="font-sans font-bold  text-[17px] tracking-tighter text-gray-900 dark:text-gray-200">Asghar Ali Taj</p>
    </div>
    <ul className="hidden grow justify-start gap-6 text-gray-900 dark:text-gray-200 md:flex text-[13px]">
      <MenuItems />
    </ul>
    <div className="flex gap-5">
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
    <span onClick={handleMode}>
      {themeIcon}
    </span>
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
    <div ref={menuRef}>
    <button onClick={()=> {setDisplay(!display)}} className="relative">
    <GiHamburgerMenu className="dark:text-gray-200 text-gray-900 hover:cursor-pointer item-center" size='24'/>
    </button>

  <div className={`${ display ? 'block': 'hidden'} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-15 right-10 shadow-lg`}>
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
<a className="cursor-pointer block px-4 py-2 hover:bg-gray-600 hover:text-gray-200 dark:hover:bg-gray-600 rounded-md"><li> <FaPenToSquare className="inline-block pb-1" size='18' />Works</li></a>

      <a className="cursor-pointer block px-4 py-2 hover:bg-gray-600 hover:text-gray-200 dark:hover:bg-gray-600 rounded-md" href="https://github.com/AsgharAliTaj/portfolio" target="_blank"><li><AiFillGithub className="inline-block pb-1" size='18'/>Source</li></a>
    </>
  )
}

export default NavBar;
