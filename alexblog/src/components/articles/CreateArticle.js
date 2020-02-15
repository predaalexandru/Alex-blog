import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createArticle} from '../../store/actions/articleActions'

class CreateArticle extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
        //we target the id either of the email or the password when is typed
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    //preventDefault action of the form submitted when page is refreshed
    e.preventDefault();
    //console.log(this.state);
    this.props.createArticle(this.state)
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-4">Create New Article</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id='title' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Article Content</label>
         <textarea id='content' className='materialize-textarea' onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

//function that access some data from reducers
const mapDispatchToProps = (dispatch) => {
  return {
    createArticle: (article) => dispatch(createArticle(article))
  }
}

export default connect(null, mapDispatchToProps)(CreateArticle)