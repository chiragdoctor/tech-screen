import React, {Component} from 'react';

class Idea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tile col-md-4">
        <div className="card" style={{width: 18+'rem'}}>
          <div className="card-body">
            <span className="deleteButton">x</span>
            <h4 className="card-title">{this.props.idea.title}</h4>
            <p className="card-text">{this.props.idea.desc}</p>
          </div>
        </div>
      </div>

    )
  }
}

export default Idea;
