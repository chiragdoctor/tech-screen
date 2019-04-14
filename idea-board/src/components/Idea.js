import React, {Component} from 'react';

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.idea.title,
      desc: this.props.idea.desc
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleBlur() {

  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <div>
          <form onBlur={this.handleBlur} >
            <div className="tile col-md-4">
              <div className="card" style={{width: 18+'rem'}}>
                <div className="card-body">
                  <input className='card-title input' type="text" name="title" placeholder='Title'
                         value={this.state.title} onChange={this.handleInput} />
                  <textarea className='card-text input' rows="3" name="desc" placeholder='Describe your thoughts'
                            value={this.state.desc} onChange={this.handleInput} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>




    )
  }
}

export default Idea;
