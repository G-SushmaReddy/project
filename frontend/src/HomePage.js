
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Benefit from './Benefit';
import WhoNeedlt from './WhoNeedIt';
import Bar1 from './Bar1';
import EndHome from './EndHome';



function HomePage() {
  return (
   
    <div className="App">
      <NavBar />
      <Home/>
      <Benefit/>
      <WhoNeedlt/>
      <Bar1/>
      <EndHome/>
   
        
      </div>
  
  );
}

export default HomePage;
