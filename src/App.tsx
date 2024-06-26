import './App.css';
import {
  Typography,
  Card,
  Carousel,
} from "@material-tailwind/react";
import Header from './components/header.components';
import FAQ from './components/faq.components';
import Footer from './components/footer.components';
import Depoiment from './components/depoiment.components';
import SliderCentral from './components/slidercentral.components';
import Sobre from './components/sobre.components';
import Escolher from './components/escolher.components';
import Beneficios from './components/beneficios.components';

function App() {
  return (
    <>
      <Header />

      {/* Conteúdo Slider Central */}
      <div className='py-3'>
        <SliderCentral />
      </div>

      <div className="w-full">
        {/* <div className="mx-auto max-w-full py-12"> */}
        <div className="mx-auto max-w-screen-2xl">
          <Sobre />

                    
          <div className='pt-5'>
            <Escolher />
          </div>

          <div className='pt-5'>
            <Beneficios />
          </div>


          {/* Depoimentos */}
          {/* <div className='pt-5'>
            <Depoiment />
          </div> */}

          {/* Perguntas Frequentes */}
          <div className='pt-5'>
            <FAQ />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
