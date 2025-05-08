import arrow from '../../assets/icons/arrow.svg';

const HomePage = () => (

  <section id="homeSection">
    <div id="imgHome" style={{ paddingTop: "0px" }}></div>
    <div id="homeInfo">
      <h1 className="title">Alice Vivas Nava</h1>
      <h2>Desenvolvedora Front End</h2>
      <div className="btnDownload defaultButton">
        <img src={arrow} alt="Download" />
        <a href="./sources/curriculoAliceNava.pdf" download="curriculoAliceNava.pdf"> Baixar Currículo </a>
      </div>
    </div>
  </section>

)


export default HomePage;