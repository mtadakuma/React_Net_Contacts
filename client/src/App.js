import './App.css';
import Contacts from '../src/components/Contacts';
import CreateContact from '../src/components/CreateContact';
import UpdateContact from '../src/components/UpdateContact';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path='/' element={<Contacts /> }/>
          <Route path='/create' element={<CreateContact />} />
          <Route path='/update/:id' element={<UpdateContact />} />
      </Routes> 
    </div>
  );
}

export default App;
