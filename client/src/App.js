import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform';
import {store} from './ReduxStuff';

 

 class App extends React.Component {

  

  render() {
    return (
      <Provider store={store}> 
      <div className="App">
        <h1 style={{color: 'red', textAlign:"center"}}>Nameless imageboard</h1>
        <Postform /> <br/>
        <Posts />
       
      </div>
      </Provider>
    );
  }
}


export default App;
