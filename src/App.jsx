import NavBar from "./components/NavBar";
import Body from "./components/Body";

function App() {

  return (
    <main className="bg-profile-light dark:bg-profile-dark min-h-screen font-sans text-profile-textLight dark:text-profile-textDark">
      <NavBar />
      <div className="">
        <Body />
        <Body />
        <Body />
        <Body />
      </div>
    </main>
  )
}

export default App
