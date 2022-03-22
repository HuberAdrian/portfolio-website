import './App.css';
import Project from './Project';



function App() {
  return (
    <div className="App">
      <h1>Programming Projects</h1>
      <h2>Web Development</h2>
      <div className='flex_container'>
        <Project name="Online Shop" link="http://online-shop.adrian-huber.org" image="Images/Online_Shop.png" />
        <Project name="Copilot for Web Development" link="" image="Images/Co_Pilot.png" />
        <Project name="Food Tracker" link="https://www.google.com" image="Images/Food_Tracker.png" used_technologies="" description="" />
      </div>
      <h2>Data Science</h2>

    </div>
  );
}

export default App;
