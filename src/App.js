import Navbar from './component/Navbar';
import Task from './component/Task';
import Info from './component/Info';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Task />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
