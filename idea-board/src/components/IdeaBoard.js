import React, { Component } from 'react';
import Idea from './idea';

class IdeaBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [
        {title: 'First Idea', desc: "This is my first idea", lastModified: new Date()},
        {title: 'Second Idea', desc: "This is my Second idea", lastModified: new Date()},
        {title: 'Second Idea', desc: "This is my Second idea", lastModified: new Date()},
        {title: 'Second Idea', desc: "This is my Second idea", lastModified: new Date()},
        {title: 'Second Idea', desc: "This is my Second idea", lastModified: new Date()}
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
        <div className="row">
          <button type="button" className="btn btn-primary newIdeaButton">Add New Idea</button>
        </div>
        <div className="row">
          {this.displayIdeas()}
        </div>
      </div>

    )
  }
}

export default IdeaBoard;
