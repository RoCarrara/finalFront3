import React from "react";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import {Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Footer from "./Components/Footer";
import { ContextProvider } from "./Components/utils/global.context";


function App() {
  return (
      <div className="App">
        <ContextProvider>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>   
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/:id' element={<Detail/>}/>
        </Routes>
        <Footer/>
        </ContextProvider>
      </div>
  );
}

export default App;
