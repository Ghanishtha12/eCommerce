import React from 'react';

const RefundPolicy = ({ mode }) => {
  return (
    <div className="container px-5 py-10 mx-auto">
      <h1 className='text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>
        Refund policy
      </h1>
      <br/>

      <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
        We're so convinced you'll absolutely love our products, that we're willing to offer a 7 day risk free money back guarantee. If you receive your order and are not satisfied for any reason you can return the product for a refund within 7 days of making a purchase.
       
        <br/><br/>
        Perishable goods are completely exempt from being returned.! <strong>Contacting us </strong>

        <br/>
        <br/>
        If you have any questions, concerns, or complaints regarding this refund policy, we encourage you to contact us using the details below:
        <br/>
        <br></br>

        <a href="mailto:urbancart@gmail.com" style={{ color: mode === 'dark' ? 'white' : 'blue' }}>
          urbancart@gmail.com
        </a>

        <br/><br/>
        This document was last updated on July 30, 2024
      </p>
    </div>
  );
};

export default RefundPolicy;
