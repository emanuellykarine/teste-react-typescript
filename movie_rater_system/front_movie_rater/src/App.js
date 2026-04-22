import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import SideBar from './components/SideBar';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
      <div id='App' className="min-h-screen flex bg-gray-800">
        <header className='w-64 !border-r-[0.1px] !border-white min-h-screen' 
                style={{borderRightWidth: '0.1px', borderRightStyle: 'solid', borderRightColor: 'white'}}>
          <SideBar/>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
