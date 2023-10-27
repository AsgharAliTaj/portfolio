import {Link, useRouteError } from "react-router-dom";
import {ImHome} from 'react-icons/im';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className=" bg-profile-dark text-profile-textDark flex flex-col justify-center h-screen text-xl items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="pb-5">
        <i className="text-red-500">{error.statusText || error.message}</i>
      </p>
      <p>Go back</p>
      <p>OR</p>
      <Link at={'/'}><button className="cursor-pointer text-[15px] text-gray-800 bg-teal-300 bg-teal-400 hover:bg-teal-600 mt-2  px-3 py-2 rounded-md hover:mouse-cursor font-bold shadow-sm" >Homepage <ImHome  className="inline-block" /></button></Link>
    </div>
  );
}
