import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Error from './_utils/Error';
import Layout from './pages/Layout';
import Cocktail from './pages/Cocktail';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/cocktail/:uid' element={<Cocktail/>} />
        
        <Route path="*" element={<Error/>} />
      </Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
