import React from 'react';
import ArticleCard from './ArticleCard';
import './articles.scss';

function Articles(props) {
   const articles = [
      {
         image: 'image-currency.jpg',
         author: 'Claire Robinson',
         title: 'Receive money in any currency with no fees',
         content:
            "The world is getting smaller and we're becoming more mobile. So Why should you be forced to only receive money in a single..."
      },
      {
         image: 'image-restaurant.jpg',
         author: 'By Wilson Hutton',
         title: 'Treat yourself without worrying about money',
         content:
            'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
      },
      {
         image: 'image-plane.jpg',
         author: 'By Wilson Hutton',
         title: 'Take your Easybank card wherever you go',
         content:
            'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
      },
      {
         image: 'image-confetti.jpg',
         author: 'By Claire Robinson',
         title: 'Our invite-only Beta accounts are now live!',
         content:
            'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
      }
   ];

   return (
      <section className="articles">
         <div className="container">
            <h2>Latest Articles</h2>
            <div className="articles-card-container">
               {articles.map((article, index) => (
                  <ArticleCard
                     key={index}
                     image={article.image}
                     title={article.title}
                     content={article.content}
                     author={article.author}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}

export default Articles;
