import { useEffect } from 'react';
import './App.css';

function App() {
   useEffect(() => {
    const component = document.querySelector('my-component');
    component.addEventListener('nameChanged', e => {
      console.log('From React:', e.detail);
    });
  }, []);
  return (
    <div className="App">
      <h1>React with POC Stencil</h1>
      <my-component name="React user: Isabele"></my-component>
    </div>
  );
}

export default App;
