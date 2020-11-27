import logo from './logo.svg';
import './App.css';
import './myfunctionalcomponents/FreshFunctionalComponent'
import FreshComponent from './myfunctionalcomponents/FreshFunctionalComponent';
import FreshClassComponent from './myclasscomponents/FreshClassComponent';
import ButtonClickEvent from './myfunctionalcomponents/ButtonClickEvent'

function App() {
  return (
    <div className="App">
     <ButtonClickEvent></ButtonClickEvent>
    </div>
  );
}

export default App;
