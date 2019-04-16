import React, {Component} from 'react';

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.idea.id,
      title: this.props.idea.title,
      desc: this.props.idea.desc
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.displayCountdown = this.displayCountdown.bind(this);
  }

  componentDidMount(){
    this.title.focus();
  }

  handleBlur = () => {
    const idea = {id:this.state.id, title: this.state.title, desc: this.state.desc, lastModified: new Date()};
    this.props.updateIdea(idea);
  };

  handleInput(e) {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleDelete() {
    this.props.deleteIdea(this.state.id);
  }

  displayCountdown() {
    return this.state.desc.length > 0 ? 140 - this.state.desc.length : 140;
  }

  render() {
    return (
      <div>
        <div>
          <form onBlur={this.handleBlur} >
            <div className="tile col-md-4">
              <div className="card" style={{width: 18+'rem'}}>
                <div className="card-body">
                  <span className="deleteButton" onClick={this.handleDelete}>x</span>
                  <input type="hidden" name="id" value={this.props.idea.id}/>
                  <input className='card-title input' type="text" name="title" placeholder='Title'
                         value={this.state.title} onChange={this.handleInput} ref={input => this.title = input}
                          />
                  <textarea className='card-text input' rows="3" name="desc" placeholder='Describe your thoughts'
                            value={this.state.desc} onChange={this.handleInput} maxLength="140" />
                  <p className='countdown'>({this.displayCountdown()}/140)</p>
                  <p className='lastModified'>{this.props.idea.lastModified}</p>
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
