import React from 'react'

const ArticleDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Article title - { id }</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Alex</div>
            <div>4th September, 5am</div>
          </div>
        </div>
      </div>
    )
}

export default ArticleDetails