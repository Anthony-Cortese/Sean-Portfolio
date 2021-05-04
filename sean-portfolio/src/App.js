
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Bio from './Bio';
import FrontPage from './FrontPage';
import Videos from './Videos';
// import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        {/* <NavBar /> */}
      </div>
      
      <div>
      <Switch>
      <Route exact path='/'>
      <FrontPage />
      </Route>
        <Route exact path='/Bio'>
          <Bio />
        </Route>
        <Route exact path='/Videos'>
          <Videos />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
