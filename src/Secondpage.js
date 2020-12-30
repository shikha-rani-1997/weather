import './second.css';
import React from 'react';
import galaxy from './galaxy.jpg';
import Fetch from './FetchData';


const App = () => {
  return (
    <div className="SApp">
      <img src={galaxy} style={{ width: '100%',backgroundSize:'cover',height:'100%'}} alt="Solar System"/>
      <div className='nav'><strong >CURRENT WEATHER API</strong>
        <br />
        <Fetch />
        </div>
          </div>
  );
};

export default App;
