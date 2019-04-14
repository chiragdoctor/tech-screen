import React, { Component } from 'react';
import shortid from 'shortid';
import Idea from './Idea';

class IdeaBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [
        {id: 1, title: 'First Idea', desc: "This is my first idea", lastModified: new Date()},
      ]
    }
    this.displayIdeas = this.displayIdeas.bind(this);
  }

  addNewIdea = () => {
    const newIdea = {id: shortid.generate(),title: '', desc: '', lastModified: new Date()};
      this.setState({ideas: [newIdea, ...this.state.ideas]})
  };

  displayIdeas() {
    return this.state.ideas.map((idea, key) => {
      return (<Idea key={key} idea={idea}/>)
    })
  }

  render(){
    return (
      <div>
        <div className="row">
          <button type="button" className="btn btn-primary newIdeaButton" onClick={this.addNewIdea} >Add New Idea</button>
        </div>
        <div className="row">
          {this.state.ideas.map((idea) => {
            return (<Idea key={idea.id} idea={idea} />)
            })
          }
        </div>
      </div>

    )
  }
}

export default IdeaBoard;
