import React, { Component } from 'react';
import Idea from './idea';

class IdeaBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [
        {title: 'FirstIdea', desc: "this is my first idea"}
      ]
    }
    this.displayIdeas = this.displayIdeas.bind(this);
  }

  displayIdeas() {
    return this.state.ideas.map((idea) => {
      return (<Idea idea={idea}/>)
    })
  }

  render(){
    return (
      <div>
        <div>
          <button type="button" className="btn btn-primary">Add New Idea</button>
        </div>
        {this.displayIdeas()}
      </div>

    )
  }
}

export default IdeaBoard;
