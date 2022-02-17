import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";


function App() {


  return (
    <div className="App bg-sky-50">

      <div className="relative min-h-screen md:flex">

        <Sidebar />
        <Content />

      </div>
    </div>
  );
}

export default App;
