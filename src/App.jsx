import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Catering from './Components/photoSection/Catering';
import { 
  CateringImages, 
  TentDecoImages, 
  SoundDanceFloorImages, 
  FlowerDecoImages, 
  StageDecoImages, 
  LightDecoImages 
} from './Components/Gallery/SliderData';
import All from './all';
import About from './Components/About/About';
import GalleryPage from './Components/Gallery/GalleryPage';
import ContactPage from './Components/Contact/ContactPage';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from './Components/scrollToTop';
import Services from './Components/Services/Services';
const App = () => {
  return (
    <>
    <Helmet>
        <title>CNS Event | Rajasthan's Best Event Management</title>
        <meta 
          name="description" 
          content="CNS Event - Complete solution for weddings, catering, decoration, and event planning in Rajasthan." 
        />
      </Helmet>
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={
          <Layout showBreadcrumb={false}>
            <All/>
          </Layout>
        }/>
        <Route path='/about' element={
          <Layout showBreadcrumb={false}>
            <About/>
          </Layout>
        }/>
        <Route path='/gallery' element={
          <Layout showBreadcrumb={false}>
            <GalleryPage/>
          </Layout>
        }/>
        <Route path='/contact' element={
          <Layout showBreadcrumb={false}>
            <ContactPage/>
          </Layout>
        }/>
        <Route path='/services' element={
          <Layout showBreadcrumb={false}>
            <Services/>
          </Layout>
        }/>
        <Route path='/catering' element={
          <Layout breadcrumbData={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/#Services' },
            { name: 'Catering Service', path: '/catering' }
          ]}>
            <Catering title="Catering Service" data={CateringImages}/>
          </Layout>
        }/>
        <Route path='/tentdeco' element={
          <Layout breadcrumbData={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/#Services' },
            { name: 'Tent Decoration', path: '/tentdeco' }
          ]}>
            <Catering title="Tent Decoration" data={TentDecoImages}/>
          </Layout>
        }/>
        <Route path='/sandf' element={
          <Layout breadcrumbData={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/#Services' },
            { name: 'Sound & Dance Floor', path: '/sandf' }
          ]}>
            <Catering title="Sound & Dance Floor" data={SoundDanceFloorImages}/>
          </Layout>
        }/>
        <Route path='/flowerdeco' element={
          <Layout breadcrumbData={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/#Services' },
            { name: 'Flower Decoration', path: '/flowerdeco' }
          ]}>
            <Catering title="Flower Decoration" data={FlowerDecoImages}/>
          </Layout>
        }/>
        <Route path='/stagedeco' element={
          <Layout breadcrumbData={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/#Services' },
            { name: 'Stage Decoration', path: '/stagedeco' }
          ]}>
            <Catering title="Stage Decoration" data={StageDecoImages}/>
          </Layout>
        }/>
        <Route path='/lightdeco' element={
          <Layout breadcrumbData={[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/#Services' },
            { name: 'Light Decoration', path: '/lightdeco' }
          ]}>
            <Catering title="Light Decoration" data={LightDecoImages}/>
          </Layout>
        }/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
