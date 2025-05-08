import logoIcon from '../../assets/icons/mouse.svg'

const NavBar = () => (
    
<nav>
        <img src={logoIcon} alt="logo" />
        <ul id="navLinks">
          <li><a href="#homeSection">Sobre Mim</a></li>
          <li><a href="#aboutSection">Skills</a></li>
          <li><a href="#skillsSection">Projetos</a></li>
          <li><a href="#contactSection"><b>Contatos</b></a></li>
        </ul>
      </nav>

)



export default NavBar;