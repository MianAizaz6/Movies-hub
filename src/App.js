
import './App.css';
import Header from './Components/Header';
import SimpleBottomNavigation from './Components/Nav/MainNav';
import { Container } from '@material-ui/core';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';
import Series from './pages/Series/Series';


function App() {
  return (
    <Router>
      <Header />
    <div className="App">
        <Container>
          <Routes>
              <Route path="/" element={ <Trending/>}> </Route>
              <Route path="/movies" element={ <Movies/>}> </Route>
              <Route path="/series" element={ <Series/>}> </Route>
              <Route path="/search" element={ <Search/>}> </Route>
          </Routes>
        </Container>
    </div>
    <SimpleBottomNavigation />

    </Router>
  );
}

export default App;
