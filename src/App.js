import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes,Route} from "react-router-dom"
import VisitorsLogin from './components/VisitorsLogin';
import CurrentAffairs from './components/currentAffairs/CurrentAffairs';
import GetQuestions from './components/currentAffairs/GetQuestions';

function App() {
  return (
    <div className="App">

    <Routes >
    <Route path="/visitors" element ={<VisitorsLogin/>} />
    <Route path="/current-affairs" element ={<CurrentAffairs/>} />
    <Route path="/" element ={<Home/>} />
    <Route path="/current-affairs/:date" element ={<GetQuestions />} />
    </Routes>
   
    </div>
  );
}

export default App;
