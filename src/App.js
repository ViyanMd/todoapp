import {React, useState} from "react";
import './App.css';
import Hero from "./components/hero/hero";
import ToDo from "./components/todo/todo";


function App() {
  const [theme, setTheme] = useState('#37474f');
  const [menu, setMenu] = useState(false)

  function changeColor(e) {
    setTheme(e.target.value)
    setMenu(false);
  }

  function openSettings() {
    setMenu(true);
  }

  return (
    <main className='app' style={{borderColor: theme}}>
      <button className="trigger" onClick={openSettings}>C</button>
      <div className={`set__color ${menu ? "active" : " "}`}>
        <button value="#37474f" className="black" onClick={(e) => changeColor(e)}></button>
        <button value="#c1c1c3" className="grey" onClick={(e) => changeColor(e)}></button>
        <button value="#C54E57" className="red" onClick={(e) => changeColor(e)}></button>
        <button value="#FF9637" className="orange" onClick={(e) => changeColor(e)}></button>
        <button value="#e6c60d" className="yellow" onClick={(e) => changeColor(e)}></button>
        <button value="#628E38" className="green" onClick={(e) => changeColor(e)}></button>
        <button value="#1167b1"className="blue" onClick={(e) => changeColor(e)}></button>
        <button value="#5e3165"className="purple" onClick={(e) => changeColor(e)}></button>
        <button value="#382b2b" className="brown" onClick={(e) => changeColor(e)}></button>
      </div>
      <Hero theme={theme}/>
      <ToDo theme={theme}/>
    </main>
  );
}

export default App;
