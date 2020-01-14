import React from 'react'
import ArticleSummary from './ArticleSummary'

const ArticleList = ({articles}) => {
  return (
    <div className="project-list section">
      {/* we map the articles */}
    { articles && articles.map(article => {
      return (
        <ArticleSummary article={article} key={article.id} />
      )
    })}  
  </div>
  )
}

export default ArticleList