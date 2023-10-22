import useDarkSide from '../hooks/useDarkSide';

import {
  FaMoon,
  FaSun,
  FaLaptopCode,
} from 'react-icons/fa';


const NavBar = () => {
  return (
<nav class="fixed w-full bg-transparent shadow-md">
  <div class="m-auto flex w-[700px] items-center justify-between px-2 py-4">
    <div class="flex mr-1 gap-1">
      <span><FaLaptopCode className="dark:text-neutral-200" size ='25' /> </span>
      <p class="font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-200">Asghar Ali Taj</p>
    </div>
    <ul class="hidden w-[400px] justify-start gap-6 text-neutral-900 dark:text-neutral-200 md:flex">
      <li class="hover:cursor-pointer hover:underline">Works</li>
      <li class="hover:cursor-pointer hover:underline">Source</li>
    </ul>
    <div class="flex gap-5">
        <ThemeIcon />
      <div class="block md:hidden">
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
    themeIcon = <FaMoon className="text-gray-500 hover:cursor-pointer" size='24'/>
  } else {
    themeIcon = <FaSun className="text-orange-400 hover:cursor-pointer" size='24'/> 
  }

  const handleMode = () => setTheme(colorTheme);
  return (
    <span onClick={handleMode}>
      {themeIcon}
    </span>
  );
}

export default NavBar;
