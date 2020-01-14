import React from 'react'

const ArticleSummary = ({article}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{article.title}</span>
        <p>Posted by Alex</p>
        <p className="grey-text">4th September, 5am</p>
      </div>
    </div>
  )
}

export default ArticleSummary