import React from 'react';
import anil8 from './images/anil8.jpg'
const Bio = ()=>{
    return(
         <>
    <div className="container">
     <div className="row">
      <h2 style={{marginTop:"2rem"}}>Review  <span className='v1'></span>& Rating Questions</h2>
     <p align="right ">
<button type="button" class="btn btn-warning">Rating</button>
</p>


     </div>
   </div>

      <div className="row design">
          <div className="col-md-2 col-2">
        
     <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block mx-auto text-center rawSetting" >
     <div className='imgsetting d-block mx-auto bg-success rounded-circle'>
     <i className="fa fa-user fa-3x text-white mt-2"></i></div>
     </div><br/> <br/>

     <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block mx-auto text-center rawSetting" >
     <div className='imgsetting d-block mx-auto bg-danger rounded-circle '> 
     <i class="fa fa-user fa-3x text-white mt-2"></i></div><br/>
  
     </div>
     
     

          </div>

          <div className="col-md-10 col-10">
          
      
     <p>jhon doe <br/>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<p align="center">
<i class="fas fa-thumbs-down ml-5"></i>
<i class="fas fa-thumbs-up mr-1"></i>
</p>
</p>
<p>vuykbfld yufsdiguoi yvsfidubgohfi savyuifdubgf sfid  asyvidf<br/>
vuykbfld yufsdiguoi yvsfidubgohfi savyuifdubgf sfid  asyvidf
</p>


   
<p>Broce Beaker <br/>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
</p>
<p align="center">
<i class="fas fa-thumbs-down ml-5"></i>
<i class="fas fa-thumbs-up mr-1"></i>
</p>
<p>vuykbfld yufsdiguoi yvsfidubgohfi savyuifdubgf sfid  asyvidf<br/>
vuykbfld yufsdiguoi yvsfidubgohfi savyuifdubgf sfid  asyvidf
</p>

<div className="col-md-2 col-2">
          <img src={anil8} alt={anil8}class="img-thumbnail  border-primary"/>
          </div> 
    <p align="right ">
<button type="button" class="btn btn-warning">view more</button>
</p>  

      </div>

      

      </div>
      <div className="row mt-2 ">
          <p>you may intrested in</p>
          <div className="col-md-3 col-3">
          <img src={anil8} alt={anil8}class="img-thumbnail  border-primary"/>
          </div> 

          <div className="col-md-3 col-3">
          <img src={anil8} alt={anil8}class="img-thumbnail  border-primary"/>
          </div> 

          <div className="col-md-3 col-3">
          <img src={anil8} alt={anil8}class="img-thumbnail  border-primary"/>
          </div> 

          <div className="col-md-3 col-3">
          <img src={anil8} alt={anil8}class="img-thumbnail  border-primary"/>
          </div> 
      </div>
         <div className=" bg-primary mt-5">
      <hr class="new5 "></hr>
      </div>
      
         </>
    )
}
export default Bio;