import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import { ViewportProvider } from './Components/useViewport';


export default function App() {

  return (
    <ViewportProvider>
      <div className="App">
        <div className="relative min-h-screen md:flex">

          <Sidebar />
          <Content />

        </div>
      </div>
    </ViewportProvider>
  );
}


