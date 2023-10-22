import useDarkSide from '../hooks/useDarkSide';

import {
  FaMoon,
  FaSun,
  FaLaptopCode,
} from 'react-icons/fa';

import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillGithub} from 'react-icons/ai';


const NavBar = () => {
  return (
<nav className="fixed w-full bg-transparent shadow-md">
  <div className="m-auto flex md:w-[786px]  items-center justify-between px-3 py-4">
    <div className="flex mr-8 gap-1">
      <span><FaLaptopCode className="dark:text-neutral-200" size ='25' /> </span>
      <p className="font-sans font-bold  text-[17px] tracking-tight text-gray-900 dark:text-gray-200">Asghar Ali Taj</p>
    </div>
    <ul className="hidden grow justify-start gap-6 text-gray-900 dark:text-gray-200 md:flex">
      <li className="hover:cursor-pointer hover:underline">Works</li>
      <a href="https://github.com/AsgharAliTaj/portfolio" target="_blank"><li className="hover:cursor-pointer hover:underline"><AiFillGithub className="dark:text-gray-200 text-gray-900 inline-block pb-1" size='22'/>Source</li></a>
    </ul>
    <div className="flex gap-5">
        <ThemeIcon />
      <div className="block md:hidden">
          <GiHamburgerMenu className="dark:text-gray-200 text-gray-900 hover:cursor-pointer  " size='24' />
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

export default NavBar;
