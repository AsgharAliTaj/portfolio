import { Outlet, useNavigation} from "react-router-dom";

import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./footer";

function Root() {
  const navigation = useNavigation();

  return (
    <main className="bg-profile-light dark:bg-profile-dark min-h-screen font-sans text-profile-textLight dark:text-profile-textDark">
      <NavBar />
      <div className={ navigation.state === "loading" ? "opacity-25": ""}>
      <div className="pt-[60px] md:pt-[65px] max-w-[535px] m-auto px-[20px]">
        <Outlet />
        <Footer />
      </div>
      </div>
    </main>
  );
}

export default Root;
