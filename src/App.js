import './App.css';
import Project from './Project';



function App() {
  return (
    <div className="App">
      <h1>Programming Projects</h1>
      <h2>Web Development</h2>
      <div>
        <Project name="" link="" image="" learned={[]} />
        <Project name="Project1" link="https://www.google.com" image="" learned={[]} />
      </div>

    </div>
  );
}

export default App;
