/** Global Imports  */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  Link  from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Moment from 'react-moment';
import 'moment-timezone';
/** Importing Routing information */
//conditionally on the paths :id value.import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  useRouteMatch,
  useParams
} from "react-router-dom";


/** Local imports */
import { currentDate } from './util/Date.js';
import conf from "./conf/app.json";
import { typography } from '@mui/system';

/**
 * @todo 
 *  1) Figure out commenting style
 *  2) Material UI integration
 *  3) Save state locally in browser
 *  4) Save state in redux or mobix
 *  5) pull config from json files
 *  6) graphql api integration
 *  7 ) drag and drop file upload
 * @returns 
 * 
 */
function App() {
  const dateToFormat = 'YYYY-MM-DDTHH:mm:ss. sssZ ';

  return (
    
    <div className="App">
      <Router>
      <div>
        <ul>
          <li><Link component={RouterLink} to='/'>Home</Link></li>
          <li><Link component={RouterLink} to='/about'>About</Link></li>
          <li><Link component={RouterLink} to='/apis'>Apis</Linknp></li>
        </ul>
      
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/apis"><Apis /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h1">Typography test</Typography>
        <h1>React Simple Docker Test (with frameworks)</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p><span>Current Moment date : </span>
            
            <Moment date={currentDate().currentTime} format={conf.DATE_FORMAT} />
            
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
/**
 * 
 * @returns 
 */
function Apis() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Apis</h2>
    </div>
      )
  } 
  /**
   * 
   * @returns 
   */
  function Api() {
    let { apiId } = useParams();
    return <h3>Requested API ID: {apiId}</h3>;
  }