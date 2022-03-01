import {React} from "react";
import './App.css';
import Hero from "./components/hero/hero";
import ToDo from "./components/todo/todo";


function App() {

  return (
    <main className='app'>
      <Hero />
      <ToDo />
    </main>
  );
}

export default App;
