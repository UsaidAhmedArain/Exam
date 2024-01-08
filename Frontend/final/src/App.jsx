import CreatePoetry from "./pages/CreatePoetry";
import PoetryView from "./pages/PoetryView";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PoetryView/>}/>
          <Route path="/CreatePoetry" element={<CreatePoetry/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
