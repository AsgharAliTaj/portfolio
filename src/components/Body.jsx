const Body = () => {
  return (
    <article className="pt-[60px] md:pt-[65px] max-w-[535px] m-auto px-[20px]">
    <div className="flex items-center justify-center text-gray-700 w-auto">

      <div className="px-2 text-center justify-center font-normal tracking-tight p-[10px] w-full rounded-md  bg-white shadow-sm dark:text-white dark:bg-neutral-700">Hello, I am  a software developer from Pakistan.</div>
    </div>
    
    <div className="md:flex mt-[20px] md:justify-between text-gray-700 dark:text-white">
    <div className="md:basis-3/4 ">
      <h1 className="text-3xl md:text-4xl font-bold">Asghar Ali Taj</h1>
      <p className="text-md">Digital Craftsman (Developer / Designer)</p>
    </div>

    <div className="flex justify-center md:block pt-5  md:p-1">
    <img src="" alt="" className="rounded-full w-[90px] h-[90px] bg-purple-500 shrink-0 border border-md  md:basis-1/4" />
    </div>

    </div>

    </article>
  )
}

export default Body;
