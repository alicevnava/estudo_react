import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './pages/homePage'
import AboutMePage from './pages/aboutMePage'
import ContactsPage from './pages/contactsPage'
import SkillsPage from './pages/skillsPage'
import NavBar from './components/navBar'

const App = () => ( 
   <main>

      {/* navBar - importando de navBar index.jsx */}
      <NavBar/>
      {/* home - importando de homePage index.jsx*/}
      <HomePage />

      {/* about me - importando de aboutMePage index.jsx*/}
      <AboutMePage />

      {/*skills - importando de contactsPage index.jsx**/}
      <SkillsPage />

      {/* contatos - importando de contactsPage index.jsx*/}
      <ContactsPage />
    </main>
  )

export { App }
