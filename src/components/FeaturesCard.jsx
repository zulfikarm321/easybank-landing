import React from 'react';

function FeaturesCard({ image, title, content }) {
   const imageUrl = `/${image}`;

   return (
      <div className="features-card">
         <img src={imageUrl} alt="image" />
         <h3>{title}</h3>
         <p>{content}</p>
      </div>
   );
}

export default FeaturesCard;
