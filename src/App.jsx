import NavBar from "./components/NavBar";
import Body from "./components/Body";

function App() {

  return (
    <div className="bg-orange-50 dark:bg-neutral-800 min-h-screen font-sans">
      <NavBar />
      <div className="">
        <Body />
      </div>
    </div>
  )
}

export default App
