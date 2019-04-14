import React, {Component} from 'react';

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.idea.id,
      title: this.props.idea.title,
      desc: this.props.idea.desc,
      lastModified: this.props.idea.lastModified
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleBlur = () => {
    const idea = {id:this.state.id, title: this.state.title, desc: this.state.desc, lastModified: new Date()};
    this.props.updateIdea(idea)
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
                  <input type="hidden" name="id" value={this.state.id}/>
                  <input className='card-title input' type="text" name="title" placeholder='Title'
                         value={this.state.title} onChange={this.handleInput} />
                  <textarea className='card-text input' rows="3" name="desc" placeholder='Describe your thoughts'
                            value={this.state.desc} onChange={this.handleInput} maxLength="140"/>
                  <p className='lastModified'>{this.state.lastModified}</p>
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
