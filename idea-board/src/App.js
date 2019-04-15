import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import IdeaBoard from './components/IdeaBoard';

export default class App extends Component {
    render() {
        return (
          <div className="container">
            <div className="App-header">
              <h1>Idea Board</h1>
            </div>
            <IdeaBoard />
          </div>
        );
    }
}
