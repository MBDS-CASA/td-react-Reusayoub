import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import data from './data.json';
import './App.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

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

function Notes() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = data.filter(note => {
    const course = note.course?.toLowerCase() || '';
    const studentFirstName = note.student?.firstname?.toLowerCase() || '';
    const studentLastName = note.student?.lastname?.toLowerCase() || '';
    const date = note.date?.toLowerCase() || '';
    const grade = note.grade?.toString().toLowerCase() || '';

    return (
      course.includes(searchQuery.toLowerCase()) ||
      studentFirstName.includes(searchQuery.toLowerCase()) ||
      studentLastName.includes(searchQuery.toLowerCase()) ||
      date.includes(searchQuery.toLowerCase()) ||
      grade.includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <h3>Liste des notes des étudiants</h3>
      <TextField
  label="Rechercher"
  variant="outlined"
  fullWidth
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  style={{
    marginBottom: '20px',
  }}
  InputProps={{
    style: {
      color: '#FFFFFF', 
    },
  }}
  InputLabelProps={{
    style: {
      color: '#FFFFFF', 
    },
  }}
/>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Student</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredNotes.map((note) => (
              <TableRow key={note.unique_id}>
                <TableCell>{note.course || 'N/A'}</TableCell>
                <TableCell>
                  {note.student?.firstname || 'N/A'} {note.student?.lastname || 'N/A'}
                </TableCell>
                <TableCell>{note.date || 'N/A'}</TableCell>
                <TableCell>{note.grade || 'N/A'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


function Etudiants() {
  const [searchQuery, setSearchQuery] = useState('');

  const students = [...new Set(data.map((note) => note.student))]; 
  const filteredStudents = students.filter(student =>
    student.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.id.toString().includes(searchQuery)
  );

  return (
    <div>
      <h3>Liste des étudiants</h3>
      <TextField
  label="Rechercher"
  variant="outlined"
  fullWidth
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  style={{
    marginBottom: '20px',
  }}
  InputProps={{
    style: {
      color: '#FFFFFF', 
    },
  }}
  InputLabelProps={{
    style: {
      color: '#FFFFFF',
    },
  }}
/>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.firstname}</TableCell>
                <TableCell>{student.lastname}</TableCell>
                <TableCell>{student.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function Matieres() {
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [...new Set(data.map((note) => note.course))]; 
  const filteredCourses = courses.filter(course =>
    course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h3>Liste des matières</h3>
      <TextField
  label="Rechercher"
  variant="outlined"
  fullWidth
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  style={{
    marginBottom: '20px',
  }}
  InputProps={{
    style: {
      color: '#FFFFFF', 
    },
  }}
  InputLabelProps={{
    style: {
      color: '#FFFFFF', 
    },
  }}
/>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Matière</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCourses.map((course, index) => (
              <TableRow key={index}>
                <TableCell>{course}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function APropos() {
  return (
    <div>
      <h3>À propos</h3>
      <p>Ce projet est une application React permettant de gérer les notes, étudiants, matières.</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Notes");

  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  };

  const handleRandomItem = () => {
    const randomItem = getRandomItem();
    setItem(randomItem);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Notes", component: <Notes /> },
    { name: "Étudiants", component: <Etudiants /> },
    { name: "Matières", component: <Matieres /> },
    { name: "À propos", component: <APropos /> },
  ];

  return (
    <>
      <Header name="React" />

      <div className="hamburger-container">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {isMenuOpen && (
          <div className="menu">
            <ul style={{ listStyle: "none", padding: 0 }}>
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => setSelectedMenu(item.name)} 
                  style={{
                    cursor: "pointer",
                    fontWeight: selectedMenu === item.name ? "bold" : "normal",
                    color: selectedMenu === item.name ? "#007bff" : "black",
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="menu-content">
        {menuItems.find((item) => item.name === selectedMenu)?.component}
      </div>

      <MainContent />

      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <div className="container text-center">
        <h1>Afficher les détails d'une note</h1>
        <button className="btn btn-primary my-4" onClick={handleRandomItem}>
          Tirer une note aléatoire
        </button>
        {item && (
          <div className="card">
            <div className="card2">
              <h5 className="card-title">{item.course}</h5>
              <p className="card-text">
                <strong>Étudiant :</strong> {item.student.firstname}{" "}
                {item.student.lastname} <br />
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
