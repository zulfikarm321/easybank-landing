import React from 'react';
import './features.scss';
import FeaturesCard from './FeaturesCard';

function Features(props) {
   const dataCard = [
      {
         image: 'icon-online.svg',
         title: 'Online Banking',
         content:
            'Our modern web and mobile applicati0js allow yout ro keep track of your finances wherever you are in the world.'
      },
      {
         image: 'icon-budgeting.svg',
         title: 'Simple Budgeting',
         content:
            ' See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
      },
      {
         image: 'icon-onboarding.svg',
         title: 'Fast Onboarding',
         content:
            'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
      },
      {
         image: 'icon-api.svg',
         title: 'Open API',
         content:
            ' Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
      }
   ];

   return (
      <section className="features">
         <div className="container">
            <div className="features-header">
               <h2>Why choose Easybank?</h2>
               <p>
                  We leverage Open Banking to turn your bank account into your
                  financial hub. Control your finances like never befor.
               </p>
            </div>
            <div className="features-card-container">
               {dataCard.map((data, index) => (
                  <FeaturesCard
                     key={index}
                     image={data.image}
                     title={data.title}
                     content={data.content}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}

export default Features;
