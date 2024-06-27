import Header from '../../components/header.components';
import FAQ from '../../components/vfp/faq.components';
import Footer from '../../components/footer.components';
import SliderCentral from '../../components/vfp/slidercentral.components';
import Sobre from '../../components/vfp/sobre.components';
import Escolher from '../../components/vfp/escolher.components';
import Beneficios from '../../components/vfp/beneficios.components';

function MetodoVFP() {
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

export default MetodoVFP;
