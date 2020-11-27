import logo from './logo.svg';
import './App.css';
import './myfunctionalcomponents/FreshFunctionalComponent'
import FreshComponent from './myfunctionalcomponents/FreshFunctionalComponent';
import FreshClassComponent from './myclasscomponents/FreshClassComponent';

function App() {
  return (
    <div className="App">
     <FreshComponent></FreshComponent>
     <FreshClassComponent></FreshClassComponent>
    </div>
  );
}

export default App;
