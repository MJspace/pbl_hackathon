import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecommendPage from './pages/RecommendPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/recommend" element={<RecommendPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
