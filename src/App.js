import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCharacters from './components/AllCharacters';
import OneCharacter from './components/OneCharacter';
import RickAndMortyLogo from './rickAndMorty.jpeg';

function App() {
  return (
    <div className="App">
      <img src={RickAndMortyLogo} alt='Logotipo Rick and Morty' className='logo'></img>
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<AllCharacters></AllCharacters>}></Route>
          <Route path='/character/:id' element={<OneCharacter></OneCharacter>}></Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
