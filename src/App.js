// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/item/:id" component={Detail} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
