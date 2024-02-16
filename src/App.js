import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './component/Navb';
import Posts from './component/Posts';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <Navb />
      <Posts  />
    </div>
  );
}

export default App;
