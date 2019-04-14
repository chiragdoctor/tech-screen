import React, { Component } from 'react';
import shortid from 'shortid';
import moment from 'moment';

import Idea from './Idea';

class IdeaBoard extends Component {
  constructor(props) {
    super(props);
    this.DATE_FORMAT = 'DD/MM/YYYY HH:mm';

    this.state = {
      ideas: [
        {id: 1, title: 'First Idea', desc: "This is my first idea", lastModified: moment(new Date()).format(this.DATE_FORMAT)},
      ]
    }
    this.displayIdeas = this.displayIdeas.bind(this);
    this.updateIdea = this.updateIdea.bind(this);
    this.deleteIdea = this.deleteIdea.bind(this);
  }

  addNewIdea = () => {
    const newIdea = {id: shortid.generate(),title: '', desc: '', lastModified: moment(new Date()).format(this.DATE_FORMAT)};
      this.setState({ideas: [newIdea, ...this.state.ideas]})
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
        i.lastModified = moment(updatedIdea.lastModified).format(this.DATE_FORMAT);
      }
      return i;
    });
    this.setState({ideas});
  }

  deleteIdea(id) {
    const ideas = this.state.ideas.filter((idea) => {
      return idea.id !== id
    });

    this.setState({ideas});
  }

  render(){
    return (
      <div>
        <div className="row">
          <button type="button" className="btn btn-primary newIdeaButton" onClick={this.addNewIdea}> Add New Idea </button>
        </div>
        <div className="row">
          {this.state.ideas.map((idea) => {
            return (<Idea key={idea.id} idea={idea} updateIdea={this.updateIdea} deleteIdea={this.deleteIdea}/>)
            })
          }
        </div>
      </div>

    )
  }
}

export default IdeaBoard;
