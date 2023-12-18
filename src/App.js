import React from 'react';
import "./App.css"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Catering from './Components/photoSection/Catering';
import { CateringImages } from './Components/Gallery/SliderData';
import { LightDecoImages } from './Components/Gallery/SliderData';
import All from './all';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<All/>}/>
        <Route path='/catering' element={<Catering title="Catering" data={CateringImages}/>}/>
        <Route path='/sandf' element={<Catering title="Sound & Floor"  data={LightDecoImages}/>}/>
        <Route path='/flowerdeco' element={<Catering title="Flower Decoration"  data={LightDecoImages}/>}/>
        <Route path='/stagedeco' element={<Catering title="Stage Decoration"  data={LightDecoImages}/>}/>
        <Route path='/tentdeco' element={<Catering title="Tent Decoration"  data={LightDecoImages}/>}/>
        <Route path='/lightdeco' element={<Catering title="Light Decoration"  data={LightDecoImages}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
