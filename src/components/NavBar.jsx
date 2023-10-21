const NavBar = () => {
  return (


<nav class="fixed w-full bg-transparent shadow-md">
  <div class="m-auto flex w-[700px] items-center justify-between px-2 py-4">
    <div class="mr-1">
      <p class="font-sans font-bold tracking-tight">Asghar Ali Taj</p>
    </div>
    <ul class="hidden w-[400px] justify-start gap-6 text-neutral-900 md:flex">
      <li class="cursor-pointer underline">Works</li>
      <li class="cursor-pointer underline">Source</li>
    </ul>
    <div class="flex gap-5">
      <div>theme</div>
      <div class="block md:hidden">
        <div>bread</div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar;
