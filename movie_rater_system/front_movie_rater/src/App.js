import './App.css';
import ListComponent from './components/MovieList';
import SideBar from './components/SideBar';

function App() {
  return (
    <div id='App' className="min-h-screen flex bg-gray-800">
      <header className='w-64 !border-r-[0.1px] !border-white min-h-screen' style={{borderRightWidth: '0.1px', borderRightStyle: 'solid', borderRightColor: 'white'}}>
        <SideBar/>
      </header>

      <main className="flex-1">
         <div className="flex justify-around">
          <ListComponent/>
          <h2 className="text-2xl text-white">Movie Details</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
