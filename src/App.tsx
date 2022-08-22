import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";
function App() {

  return (
    <div className="flex bg-gray-700 h-screen">
      <Sidebar/>
      <Maincontent/>
    </div>
  )
}

export default App
