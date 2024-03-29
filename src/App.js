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
      <div className='flex_container'>
      <Project name="Naive Bayes Classification" link="https://github.com/HuberAdrian/DataScience-Lectures/blob/main/Week_4/Week4_Assignment_Classification_solution.ipynb" image="Images/MNIST.png" description="Using the MNIST data set on handwritten digits to compare supervised classification algorithms" used_technologies={["Python","pandas","numpy", "matplotlib","sklearn", "surprise library" , "Google Colab"]} />
      <Project name="Random Forest Regression" link="https://github.com/HuberAdrian/DataScience-Lectures/blob/main/Week_6/Week6_AutoSkLearn_Regression_NY_Taxy_solution.ipynb" image="Images/Taxi.png" description="finding the best parameters for predicting the fare of taxi rides with Random Forest Regression" used_technologies={["Python","pandas","numpy", "matplotlib","sklearn", "surprise library" , "Google Colab"]} />
      <Project name="Movie Recommender System" link="https://github.com/HuberAdrian/DataScience-Lectures/blob/main/Week_2/UseCase_RecommendationSystems.ipynb" image="Images/movielens.png" description="Movie recommender system for the Movielens data base, using different approaches of a collaborative item-item filter based on the given ratings" used_technologies={["Python","pandas","numpy", "matplotlib","sklearn", "surprise library" , "Google Colab"]} />
      <Project name="Image Classification with CNNs" link="https://github.com/HuberAdrian/DataScience-Lectures/blob/main/Week_7/Week7_CNNs_solution.ipynb" image="Images/CNN.png" description="building and training of the AlexNet CNN architecture for the CIFAR 10 data set, optimization the learning hyper-paramters to get the best test accuracy" used_technologies={["Python","pandas","numpy", "matplotlib","sklearn", "surprise library" , "Google Colab"]} />
      </div>
      <h2>Mechanical Engineering Projects</h2>
      <div className='flex_container'>
        <Project name="construction of a planetary gear" link="https://github.com/HuberAdrian/mechanical-engineering/tree/main/construction%20of%20planetary%20gear" image="Images/Planetary_Gear.png" description="Construct and design of a compact, single-stage planetary gear with straight teeth based on the individual task" used_technologies={["matlab"]} />
        <Project name="simulations" link="https://github.com/HuberAdrian/mechanical-engineering/tree/main/simulations" image="Images/Federgabel.png" description="Part1: Derivation + simulation of the highest torque and torsional moment on the drive shaft of a chainshaw. Part2: simulation of the vertical movement of a bike based on a given ground" used_technologies={["matlab"]} />
        <Project name="numeric" link="https://github.com/HuberAdrian/mechanical-engineering/tree/main/numeric" image="Images/numeric.png" description="interplation, numerical methods nonlinear equations, numerical differentation, numerical integration" used_technologies={["matlab"]} />
      </div>
    </div>
  );
}

export default App;
