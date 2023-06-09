import { ImageUpload } from "./home";
import Nav from "./components/Nav";
import Diseases from "./components/Diseases";
import About from "./components/About";
import { Route, Routes } from 'react-router-dom';

function App() {

  return <> 
  {/* <Nav/> */}
  <ImageUpload />

    {/* <Routes>
    <Route exact path='/' element={<ImageUpload/>}></Route>
    <Route exact path='/About' element={<About/>}></Route>
    <Route exact path='/Notes' element={<Diseases/>}></Route>
   

  </Routes> */}
  </>;
}

export default App;
