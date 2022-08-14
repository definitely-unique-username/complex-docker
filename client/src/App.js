import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import OtherPage from './OtherPage';
import { Fib } from './Fib';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Fib Calculator</h1>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
        <Routes>
          <Route exact path="/" element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
