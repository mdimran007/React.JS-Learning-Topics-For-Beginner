import logo from './logo.svg';
import './App.css';
import './myfunctionalcomponents/FreshFunctionalComponent'
import FreshComponent from './myfunctionalcomponents/FreshFunctionalComponent';
import FreshClassComponent from './myclasscomponents/FreshClassComponent';

function App() {
  return (
    <div className="App">
     <FreshComponent name="Md Imran"></FreshComponent>
     <FreshComponent name="Md Rakib"></FreshComponent>
     <FreshComponent name="Md Kabir"></FreshComponent>
     <FreshComponent name="Md Karim"></FreshComponent>


     {/* <FreshClassComponent></FreshClassComponent> */}
    </div>
  );
}

export default App;
