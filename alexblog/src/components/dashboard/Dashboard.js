import React, { Component } from 'react'
import ArticleList from '../articles/ArticleList'
import Notifications from './Notifications'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {

    const { articles } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ArticleList articles={articles} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

//function that access some data from reducers
const mapStateToProps = (state) => {
  return {
    articles: state.firestore.ordered.articles
  }
}

//we use compose to store different enhanch togheter
export default compose (
  connect(mapStateToProps),
  //with this we connect to which collection we want
  firestoreConnect([
    {collection: 'articles'}
  ])
)(Dashboard)