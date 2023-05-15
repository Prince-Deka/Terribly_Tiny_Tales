import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import Graph from './component/Graph/Graph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/graph' element={<Graph />}></Route>
        </Routes>
      </header>
      <footer style={{color:""}} className='footer'>
        &copy; 2023 Prince. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
