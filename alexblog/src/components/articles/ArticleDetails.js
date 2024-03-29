import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'


const ArticleDetails = (props) => {
  const { article, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (article) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{article.title}</span>
            <p>{article.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {article.authorFirstName} {article.authorLastName}</div>
            <div>{moment(article.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading article...</p>
      </div>
    )
  }
}

//we pass props as a second parameter
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const articles = state.firestore.data.articles;
  //we make sure if we have articles
  const article = articles ? articles[id] : null
  return {
    article: article,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'articles'
  }])
)(ArticleDetails)