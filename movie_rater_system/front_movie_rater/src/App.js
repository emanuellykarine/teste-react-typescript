import './App.css';
import ListComponent from './components/MovieList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header>
        <h1 className="text-4xl font-bold text-center m-0">Movie Rater</h1>
        <div className="flex justify-around">
          <ListComponent/>
          <h2 className="text-2xl">Movie Details</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
