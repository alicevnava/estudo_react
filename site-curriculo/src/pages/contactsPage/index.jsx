import mailIcon from '../../assets/icons/mail.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import githubnIcon from '../../assets/icons/github.svg'




const ContactsPage = () => (

    <section id="contactSection">
    <div id="contactInfo">
      <div id="contactInfoChild">
        <h1 classNameName="title">Contato</h1>
        <p className="customLineHeight">Gostaria de bater um papo comigo? Vou deixar todas as minhas formas de contato e redes sociais listadas abaixo.</p>

        <address className="emailAndPhone" >
          <div className="contactItem">
            <img className="imgContactItens" src= {mailIcon} />
            <p>vivasn.alice@gmail.com</p>
          </div>
          <div className="contactItem">
            <img src={phoneIcon} />
            <p><a href="https://wa.me/5561998171173" target="_blank">+55 (61) 99817-1173</a></p>
          </div>
        </address>

        <div className="socialMedia">
          <a href="https://www.linkedin.com/in/alice-vivas-nava/" target="_blank">
            <img src={linkedinIcon} className="socialIcon"/>
          </a>

          <a href="https://github.com/alicevnava" target="_blank">
            <img src={githubnIcon} className="socialIcon"/>
          </a>
        </div>
      </div>
    </div>

    <div id="contactPhoto"></div>
  </section>

)

export default ContactsPage