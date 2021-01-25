import React from 'react';

import Footer from './Footer';
import Services from './Services';
import Bio from './Bio';

import foot1 from './images/anil2.jpg';


const Home =()=>{
    return(
        <>
      {/* main header */}
    <div class="container-fluid main_header">
      <div class="row mt-4">
       <div class="col-md-10 col-12 mx-auto">

        <div class="row">
          
         {/*right side div */} 
        {/*right side div */} 
        <div class="col-md-4 col-12 main_header_right">

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={foot1} class=" w-100" alt="..."/>
    </div>
  
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</div>
          { /*left side div*/}
          <div class="col-md-8 col-12 main_header_left mt-2 ">
         <h3>Casuals Running shoes for men</h3>
         <p>(Black)</p>
         <p>2500/-  50% OFF</p>
         <p>the xyz is designed for circuit training,HIIT,spint
         other fast-paced exercise</p>
             <p>Quantity  <button>-</button> 1 <button>+</button></p>
                <p>size-uk/india</p>
     
<div class="numberCircle d-flex">5</div>
<div class="numberCircle d-flex">6</div>
<div class="numberCircle d-flex">7</div>
            
            
          </div>
        
              <Services/>
     
         <Bio/>
             

   
     
    
        </div>   
      </div>
      <Footer/>
    </div>
</div>



        </>
    )
}

export default Home;