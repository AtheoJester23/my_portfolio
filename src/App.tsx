import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Test from './pages/Test';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <Intro onFinish={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home/>
            }
          />
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
