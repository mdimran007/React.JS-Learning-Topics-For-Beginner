import logo from './logo.svg';
import './App.css';
import './myfunctionalcomponents/FreshFunctionalComponent'
import FreshComponent from './myfunctionalcomponents/FreshFunctionalComponent';
import FreshClassComponent from './myclasscomponents/FreshClassComponent';

function App() {
  return (
    <div className="App">
     {/* <FreshComponent name="Md Imran"></FreshComponent>
     <FreshComponent name="Md Rakib"></FreshComponent>
     <FreshComponent name="Md Kabir"></FreshComponent>
     <FreshComponent name="Md Karim"></FreshComponent> */}


     <FreshClassComponent name="Md Imran"></FreshClassComponent>
     <FreshClassComponent name="Md Rakib" age="25"></FreshClassComponent>
     <FreshClassComponent name="Md Rakib"></FreshClassComponent>
     <FreshClassComponent name="Md Rakib"></FreshClassComponent>
    </div>
  );
}

export default App;
