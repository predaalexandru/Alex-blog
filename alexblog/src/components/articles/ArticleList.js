import React from 'react'
import ArticleSummary from './ArticleSummary'
import { Link } from 'react-router-dom'

const ArticleList = ({articles}) => {
  return (
    <div className="project-list section">
      {/* we map the articles */}
    { articles && articles.map(article => {
      return (
        <Link to={'/article/' + article.id} key={article.id}>
          <ArticleSummary article={article} />
        </Link>
      )
    })}  
  </div>
  )
}

export default ArticleList