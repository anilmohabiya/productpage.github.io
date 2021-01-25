import React from 'react';
import Sdata from './Sdata';

const Footer =()=>{
    return(
      <>
       <Sdata/>
         <div class="footer-dark mt-3">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>GET in Touch</h3>
                        <ul>
                            <li>8779838450</li>
                           
                            <li>Mumbai</li>
                            <li>revert.com</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>Policies</h3>
                        <ul>
                           <li>About</li>
                           <li>Security</li>
                           <li>Term & Condition</li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>Special Categories</h3>
                      
                        <ul>
                        <li>Mens</li>
                        <li>Womens</li>
                        <li>Kids</li>
                        <li>Electronics</li>
                        <li>Other Product</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>Quick Links</h3>
                        <ul>
                        <li>My orders</li>
                        <li>My Account</li>
                        </ul>
                    </div>
                   
                </div>
                
            </div>
        </footer>
    </div>
      </>
    )
}

export default Footer;