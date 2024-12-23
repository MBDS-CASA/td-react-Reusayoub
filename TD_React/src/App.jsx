import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import data from './data.json';

import './App.css';

function Header({ name }) {
  return (
    <header>
      <img src="https://emsi.ma/wp-content/uploads/2020/07/logo.png" alt="logo_emsi" style={{ maxWidth: '100%', height: 'auto' }} />
      <h1>Introduction à {name}</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  );
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
  const annee = new Date().getFullYear();
  return (
    <footer style={{ bottom: 0, width: '100%', textAlign: 'center' }}>
      <p>© {annee} - {Nom} {Prenom}, Tous droits réservés.</p>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(null);  // Ajouter un état pour l'élément aléatoire

  // Fonction pour tirer un item aléatoirement
  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  };

  // Fonction pour afficher un item aléatoire
  const handleRandomItem = () => {
    const randomItem = getRandomItem();
    setItem(randomItem);  // Met à jour l'état avec un élément aléatoire
  };

  return (
    <>
      <div>
        <Header name="React" />
        <MainContent />

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + MBDS + React</h1>
      
      {/* Affichage du bouton et de l'élément aléatoire */}
      <div className="container text-center">
        <h1>Afficher les détails d'une note</h1>
        <button className="btn btn-primary my-4" onClick={handleRandomItem}>
          Tirer une note aléatoire
        </button>
        {item && (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.course}</h5>
              <p className="card-text">
                <strong>Étudiant :</strong> {item.student.firstname} {item.student.lastname} <br />
                <strong>ID étudiant :</strong> {item.student.id} <br />
                <strong>Date :</strong> {item.date} <br />
                <strong>Note :</strong> {item.grade} <br />
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer Nom="Benabdoulwahid" Prenom="Ayoub" />
    </>
  );
}

export default App;
