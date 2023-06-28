
import './App.css';
import Card1 from './Card';
import Carousel1 from './Carousel1';

import ExternalStyle from './ExternalStyle';
import Inlinecss from './Inlinecss';
import InternalCss from './InternalCss';
import Modal1 from './Modal1';
import Cards2 from './Restaurant/Cards2';
import Carousel2 from './Restaurant/Carousel2';
import Carousel3 from './Restaurant/Carousel3';
import Carousel4 from './Restaurant/Carousel4';
import Footer2 from './Restaurant/Footer2';
import Nav1 from './Restaurant/Nav1';
import Sample from './Sample';
import UseStateEg from './UseStateEg';
import UseStateEg2 from './UseStateEg2';
import UseStateEg3 from './UseStateEg3';
import UseStateEg4 from './UseStateEg4';


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
      <Nav1/>
      <Carousel2/><br></br>
      <Cards2/><br></br>
      <Carousel4/><br></br>
      <Carousel3/>
      <Footer2/>
      {/* <UseStateEg/> */}
      {/* <UseStateEg2/> */}
      {/* <UseStateEg3/> */}
      {/* <UseStateEg4/> */}
      
    </div>
  );
}

export default App;
