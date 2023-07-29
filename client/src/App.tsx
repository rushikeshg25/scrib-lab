
import './App.css'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import RoomForm from './components/RoomForm';


function App() {
  return (
    <div className='flex flex-col h-screen bg-gradient-to-b from-black to-slate-800'>
      <div><Navbar /></div>
      <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'><RoomForm/></div>
      <div><Footer/></div>
      
      </div>
  );
}


export default App
