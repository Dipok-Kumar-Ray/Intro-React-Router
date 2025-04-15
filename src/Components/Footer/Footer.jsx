import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div>
           <p><small>Thank you for visiting our website  ...</small></p>
          <div className='footer'>
          <a href="/" > terms</a> 
           <a href="/">privacy</a>
           <a href="/facebook">Facebook</a>
           <a href="/youtube">YouTube</a>
           <a href="/github">Github</a>
          </div>
        </div>
    );
};

export default Footer;