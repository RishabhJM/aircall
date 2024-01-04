import React from 'react';
import ReactDOM from 'react-dom';
import CallContainer from './components/call container/call-container.jsx';
import Tabs from './components/header/Tabs.jsx';

import './css/app.css'
import Header from './Header.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Tabs></Tabs>
      <CallContainer></CallContainer>
      <div className="container-header">Menu of options</div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
