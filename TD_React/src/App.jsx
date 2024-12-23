import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header({name}){
  return(
    <header>
      <img src="https://emsi.ma/wp-content/uploads/2020/07/logo.png" alt="logo_emsi" style={{ maxWidth: '100%', height: 'auto' }}
      />

      <h1>Introduction à {name}</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  )
}
function MainContent() {
  const now = new Date();
    
  const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  const jour = jours[now.getDay()];
  const moisNom = mois[now.getMonth()];
  const annee = now.getFullYear();
  const heure = String(now.getHours()).padStart(2, '0'); 
  const minute = String(now.getMinutes()).padStart(2, '0'); 
  const seconde = String(now.getSeconds()).padStart(2, '0'); 
  return (
      <p>Bonjour, on est le {jour}, {moisNom}, {annee} et il est {heure}:{minute}:{seconde}</p>
  );
}

function Footer({ Nom, Prenom }) {
  return (
    <footer style={{  bottom: 0, width: '100%', textAlign: 'center' }}>
      <p>Tous droits réservés - {Nom} {Prenom}</p>
    </footer>
  );
}





function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <div>
        
        <Header name='React'/>
        <MainContent/>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + MBDS + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer Nom="Benabdoulwahid" Prenom="Ayoub"/>

    </>
  )
}

export default App
