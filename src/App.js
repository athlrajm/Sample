
import { NavDropdown } from 'react-bootstrap';
import About from './About';
import './App.css';
import Array1 from './Array1';
import Card1 from './Card';
import CardWithApi from './CardWithApi';
import CardWithApi2 from './CardWithApi2';
import Carousel1 from './Carousel1';
import CarouselMap from './CarouselMap';
import CarouselWithApi from './CarouselWithApi';
import ContextUpdate from './ContextUpdate';
import Destructuring from './Destructuring';
import DummyApi from './DummyApi';
import DummyApi1 from './DummyApi1';

import ExternalStyle from './ExternalStyle';
import Inlinecss from './Inlinecss';
import InternalCss from './InternalCss';
import MapCar1 from './MapCar1';
import MapCards from './MapCards';
import MapTable from './MapTable';
import Modal1 from './Modal1';
import Caro1 from './Nike/Caro1';
import Caro2 from './Nike/Caro2';
import Caro3 from './Nike/Caro3';
import FooterList from './Nike/FooterList';
import Navbar1 from './Nike/Navbar1';
import NikeCard1 from './Nike/NikeCard1';
import NikeCat1 from './Nike/NikeCat1';
import NikeCat2 from './Nike/NikeCat2';
import NikeFooter1 from './Nike/NikeFooter1';
import NikeSlide2 from './Nike/NikeSlide2';
import Slide1 from './Nike/Slide1';
import Props1 from './Props1';
import Props2 from './Props2';
import Props3 from './Props3';
import Props5 from './Props5';
import PropsTaskAge1 from './PropsTaskAge1';
import Cards2 from './Restaurant/Cards2';
import Carousel2 from './Restaurant/Carousel2';
import Carousel3 from './Restaurant/Carousel3';
import Carousel4 from './Restaurant/Carousel4';
import Footer2 from './Restaurant/Footer2';
import Nav1 from './Restaurant/Nav1';

import Sample from './Sample';
import SpreadEg from './SpreadEg';
import Ternary from './Ternary';
import TernayTask from './TernayTask';
import UseEffectEg from './UseEffectEg';
import UseEffectHook from './UseEffectHook';
import UseNavigate from './UseNavigate';
import UseStateEg from './UseStateEg';
import UseStateEg2 from './UseStateEg2';
import UseStateEg3 from './UseStateEg3';
import UseStateEg4 from './UseStateEg4';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavH from './Harley/NavH';
import CaroH from './Harley/CaroH';
import Bikes from './Harley/Bikes';
import DefaultPara from './DefaultPara';


function App() {
  return (
    <div className="App">
      {/* <Sample/>
      <Inlinecss/>
      <InternalCss/>
      <ExternalStyle/> */}
      {/* <Card1/>
      <Carousel1/>
      <Modal1/> */}
      {/* <Nav1/>
      <Carousel2/><br></br>
      <Cards2/><br></br>
      <Carousel4/><br></br>
      <Carousel3/>
      <Footer2/> */}
      {/* <UseStateEg/> */}
      {/* <UseStateEg2/> */}
      {/* <UseStateEg3/> */}
      {/* <UseStateEg4/> */}
      {/* <Array1/> */}
      {/* <MapCards/> */}
      {/* <MapCar1/> */}
      {/* <MapTable/> */}

      {/* nike */} 
     {/* <Navbar1/>
     <Caro1/><br></br>
     <Caro2/>
     <NikeCard1/>
     <Slide1/>
     <Caro3/><br></br>
     <NikeCat1/>
     <NikeCat2/>
     <NikeSlide2/>
     <FooterList/>
     <NikeFooter1/> */}
     {/* <Destructuring/> */}
      {/* <Props1/> */}

      {/* <Props3/> */}
       {/* <PropsTaskAge1/> */}
       {/* <Props5/> */}
       {/* <Ternary/> */}
       {/* <TernayTask/> */}
       {/* <SpreadEg/> */}
       {/* <UseEffectHook/> */}
       {/* <UseEffectEg/> */}
       {/* <UseEffectEg/> */}
       {/* <DummyApi/> */}
        {/* <DummyApi1/> */}
        {/* <CardWithApi/> */}
        {/* <CarouselWithApi/> */}
        {/* <About/> */}
        {/* <ContextUpdate/> */}
        {/* <CarouselMap/> */}
        {/* <CardWithApi2/> */}
         {/* <BrowserRouter>
      <Routes>
         <Route path='/' element={<><Nav1/><UseNavigate/></>}/>
           <Route path='/DummyApi' element={<><Nav1/><Card1/></>}/>
           <Route path='/page1' element={<Card1/>}/>
           <Route path='/page1' element={<Card1/>}/>
         </Routes>
        </BrowserRouter>  */}
        {/* <NavH/>
        <CaroH/>
        <Bikes/> */}
        {/* <BrowserRouter>
      <Routes>
         <Route path='/' element={<><NavH/><CaroH/></>}/>
           <Route path='/Bikes' element={<><NavH/><Bikes/></>}/>
           
         </Routes>
        </BrowserRouter>  */}
        <DefaultPara/>
        <DefaultPara name='John' age={30} />



       
       
        
           
        


    </div>
  );
}

export default App;
