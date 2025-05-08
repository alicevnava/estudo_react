import downloadIcon from '../../assets/icons/download.svg'

const SkillsPage = () => (
    
<section id="skillsSection">
          <div className="overlay">
            <h1 className="title">Skills</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
            <div className="defaultButton btnResume">
              <img src={downloadIcon} alt="Download" />
              <a
                href="./sources/curriculoAliceNava.pdf" download="curriculoAliceNava.pdf">Baixar Currículo Completo</a>
            </div>
          </div>
        </section>
)


export default SkillsPage