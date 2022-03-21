import './App.css';
import Project from './Project';



function App() {
  return (
    <div className="App">
      <h1>Programming Projects</h1>
      <h2>Web Development</h2>
      <div>
        <Project name="Online Shop" link="" image="Images/Online_Shop.png" learned={[]} />
        <Project name="Food Tracker" link="https://www.google.com" image="" learned={[]} used_technologies="" description="" />
      </div>

    </div>
  );
}

export default App;
