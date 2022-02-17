import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content"

function App() {
  return (
    <div className="App">

      <div className="relative min-h-screen flex">

        <Sidebar />
        <Content />

      </div>
    </div>
  );
}

export default App;
