import React from 'react'
import moment from 'moment'

const ArticleSummary = ({article}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{article.title}</span>
        <p>Posted by {article.authorFirstName} {article.authorLastName}</p>
        <p className="grey-text">{moment(article.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ArticleSummary