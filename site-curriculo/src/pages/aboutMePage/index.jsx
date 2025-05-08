import arrow from '../../assets/icons/arrow.svg';

const AboutMePage = () => (
<section id="aboutSection">
          <div id="aboutInfo">
            <div id="aboutInfoFlex">
              <h1 className="title">Sobre Mim</h1>
              <p>
                Olá! Me chamo Alice Vivas Nava e sou de Brasília, DF. Sou uma
                desenvolvedora front-end recém-formada, apaixonada por criar
                interfaces funcionais e esteticamente agradáveis. Tenho
                experiência prática no desenvolvimento de sites e aplicações web
                utilizando HTML, CSS e JavaScript e, atualmente, estou
                aprofundando meus conhecimentos em React para criar aplicações
                ainda mais dinâmicas e modernas.
              </p>
              <div className="btnLinkedin defaultButton">
              <img src={arrow} alt="seta para direita" />
                {/* <img src="../../assets/icons/arrow.svg" alt="seta para direita" /> */}
                <a href="https://www.linkedin.com/in/alice-vivas-nava" target="_blank">Confira meu Linkedin</a>
              </div>
            </div>
          </div>
          <div id="imgAbout"></div>
        </section>

)

export default AboutMePage;