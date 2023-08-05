import React from 'react';

function ArticleCard({ image, title, content, author }) {
   const imageUrl = `/${image}`;

   return (
      <div className="article-card">
         <img src={imageUrl} alt="image" />
         <div className="article-card-body">
            <span>{author}</span>
            <h4>{title}</h4>
            <p>{content}</p>
         </div>
      </div>
   );
}

export default ArticleCard;
