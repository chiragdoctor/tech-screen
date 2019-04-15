import React, { Component } from 'react';
import shortid from 'shortid';
import moment from 'moment';
import { toast } from 'react-toastify';

import {DATE_FORMAT} from "../constants";
import Idea from './Idea';
import Notification from './Notification';

class IdeaBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [{id: 1, title: 'First Idea', desc: "This is my first idea", lastModified: this.formatDate(new Date())}],
      newIdeaId: 1
    };

    this.displayIdeas = this.displayIdeas.bind(this);
    this.updateIdea = this.updateIdea.bind(this);
    this.deleteIdea = this.deleteIdea.bind(this);
    this.sortIdeas = this.sortIdeas.bind(this);
  }


  notifyUpdateTile = () => toast("Idea has been updated !");

  formatDate(date) {
    return moment(date).format(DATE_FORMAT);
  }

  addNewIdea = () => {
    const id = shortid.generate();
    const newIdea = {id, title: '', desc: '', lastModified: this.formatDate(new Date())};
      this.setState({ideas: [newIdea, ...this.state.ideas], newIdeaId: id});
  };

  displayIdeas() {
    return this.state.ideas.map((idea, key) => {
      return (<Idea key={key} idea={idea}/>)
    })
  }

  updateIdea(updatedIdea) {
    const ideas = this.state.ideas.map((i) => {
      if(i.id === updatedIdea.id) {
        i.title = updatedIdea.title;
        i.desc = updatedIdea.desc;
        i.lastModified = this.formatDate(updatedIdea.lastModified);
      }
      return i;
    });
    this.setState({ideas}, () => this.notifyUpdateTile());
  }

  deleteIdea(id) {
    const ideas = this.state.ideas.filter((idea) => {
      return idea.id !== id
    });

    this.setState({ideas});
  }

  sortIdeas(e) {
    const {value} = e.target;
    if(!value || value === 'sort') {
      return;
    }
    let ideas = this.state.ideas.sort((idea, nextIdea) => idea[value] < nextIdea[value] ? -1 : idea[value] > nextIdea[value] ? 1 : 0);
    if(value === 'lastModified') {
      ideas = ideas.reverse();
    }
    this.setState({ideas});
  }

  render(){
    return (
      <div>
        <Notification />
        <div className="row">
          <div className="col-md-2">
            <button type="button" className="btn btn-primary newIdeaButton" onClick={this.addNewIdea}> Add New Idea </button>
          </div>
          <div className="col-md-2" />
          <div className="col-md-2" />
          <div className="col-md-2" />
          <div className="col-md-2" />
          <div className="col-md-2">
            <select className="form-control" id="sortBySelect1" onChange={this.sortIdeas}>
              <option value="sort">Sort</option>
              <option value="lastModified">By Creation/Modification Date</option>
              <option value="title">By Title</option>
            </select>
          </div>
        </div>
        <div className="row">
          {this.state.ideas.map((idea) => {
            return (<Idea key={idea.id} idea={idea} updateIdea={this.updateIdea} deleteIdea={this.deleteIdea} />)
          })
          }
        </div>
      </div>

    )
  }
}

export default IdeaBoard;
