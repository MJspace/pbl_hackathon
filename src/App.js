import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecommendPage from './pages/RecommendPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
      </Routes>
    </div>
  );
}

export default App;
