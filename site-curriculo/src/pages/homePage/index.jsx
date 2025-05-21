import downloadIcon from '../../assets/icons/download.svg'
import Buttons from '../../components/Buttons';
// import '../../components/Buttons/styles.css';

const HomePage = () => (

  <section id="homeSection">
    <div id="imgHome" style={{ paddingTop: "0px" }}></div>
    <div id="homeInfo">
      <h1 className="title">Alice Vivas Nava</h1>
      <h2>Desenvolvedora Front End</h2>
      {/* <div className="btnDownload defaultButton">
        <img src={arrow} alt="Download" />
        <a href="./sources/curriculoAliceNava.pdf" download="curriculoAliceNava.pdf"> Baixar Currículo </a>
      </div> */}
      
      {/* importar botão - passar props como atributos*/}
      <Buttons
        iconImage={downloadIcon}
        btnColorClass="btnDownload">
        Baixar Currículo
      </Buttons>
    </div>
  </section>

)


export default HomePage;