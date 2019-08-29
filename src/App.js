import React from 'react';
import './App.css';
import Header from "./components/Header/Header";

const App = (props) => {
  return (
    <div className="App">
      <Header names = {props.names} />
    </div>
  );
};

export default App;
