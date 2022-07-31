import './App.css';
import Project from './Project';



function App() {
  return (
    <div className="App">
      <h1>Programming Projects</h1>
      <h2>Web Development</h2>
      <div className='flex_container'>
        <Project name="Online Shop" link="http://online-shop.adrian-huber.org" image="Images/Online_Shop.png" description="A complete online store with Stripe API (testmode), cart, local storage and many more features" used_technologies={["React", "Redux", "Jest (testing Library)", "React-router-dom", "Stripe API", "HTML", "CSS", "JavaScript"]} />
        <Project name="Copilot for Web Development" link="https://adrian-huber.org/copilot/" image="Images/Co_Pilot.png" description="An interactive program for web development ressources and concepts I learned. There is also a searchbar to look for certain keywords" used_technologies={["React", "react-notion (Libary to include Notion pages)", "HTML", "CSS", "JavaScript", ]} />
        <Project name="Food Tracker" link="https://adrian-huber.org/food-tracker/" image="Images/Food_Tracker.png" used_technologies={["Chart.js (Library)", "snackbar (Library)", "HTML", "CSS", "JavaScript"]} description="A web application which tracks the nutritional values of specified food. The combined values are also displayed in an animated chart below. The Data is stored in a database (Firestore)." />
      </div>
      <h2>Data Science</h2>
      <Project name="Movie Recommender System" link="http://online-shop.adrian-huber.org" image="Images/Online_Shop.png" description="Movie recommender system for the Movielens data base, using different approaches of a collaborative item-item filter based on the given ratings" used_technologies={["Python","pandas","numpy", "matplotlib","sklearn", "surprise library" , "Google Colab"]} />
      <h2>Mechanical Engineering Projects</h2>
      <div className='flex_container'>
        <Project name="numeric" link="https://github.com/HuberAdrian/mechanical-engineering/tree/main/numeric" image="Images/Online_Shop.png" description="interplation, numerical methods nonlinear equations, numerical differentation, numerical integration" used_technologies={["React", "Redux", "Jest (testing Library)", "React-router-dom", "Stripe API", "HTML", "CSS", "JavaScript"]} />
        <Project name="construction of a planetary gear" link="https://github.com/HuberAdrian/mechanical-engineering/tree/main/construction%20of%20planetary%20gear" image="Images/Online_Shop.png" description="A complete online store with Stripe API (testmode), cart, local storage and many more features" used_technologies={["React", "Redux", "Jest (testing Library)", "React-router-dom", "Stripe API", "HTML", "CSS", "JavaScript"]} />
        <Project name="simulations" link="https://github.com/HuberAdrian/mechanical-engineering/tree/main/simulations" image="Images/Online_Shop.png" description="A complete online store with Stripe API (testmode), cart, local storage and many more features" used_technologies={["React", "Redux", "Jest (testing Library)", "React-router-dom", "Stripe API", "HTML", "CSS", "JavaScript"]} />
      </div>
    </div>
  );
}

export default App;
