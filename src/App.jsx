import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/footer";

function App() {

  return (
    <main className="bg-profile-light dark:bg-profile-dark min-h-screen font-sans text-profile-textLight dark:text-profile-textDark">
      <NavBar />
      <div className="pt-[60px] md:pt-[65px] max-w-[535px] m-auto px-[20px]">
        <Body />
        <Footer />
      </div>
    </main>
  )
}

export default App
