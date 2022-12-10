import "./App.css";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import { useEffect, useState } from "react";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";


function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const[characters, setCharacters]= useState([]);
  const[access,setAccess] = useState(false);
  const username = 'david@app.com';
  const password = '1password';

  function login(userData){
    if (userData.password === password && userData.username === username){
      setAccess(true)
      navigate('/home')
    }
    else {
      alert('Datos de Ingreso Incorrectos')
    }
  }
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) => {
 setCharacters(characters.filter(char => char.id !== id) )
 };

 useEffect(() => {
  !access && navigate('/');
 }, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        {location.pathname !=='/' && <Nav onSearch={onSearch}/>}
      </div>
      <Routes>
        <Route path ="/" element = {<Form login={login}/>}/>
        <Route path ="/home" element= {<Cards characters={characters} onClose = {onClose}/>}/>
        <Route path ="/about" element= {<About/>}/>
        <Route path ="/detail/:detailid" element= {<Detail/>}/>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
