import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";
function App() {

  return (
    <div className="flex bg-gray-700 h-screen lg:h-full">
      <Sidebar/>
      <Maincontent/>
    </div>
  )
}

export default App
