import React, {Component} from 'react';

class Idea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.idea.title}</p>
      </div>
    )
  }
}

export default Idea;
