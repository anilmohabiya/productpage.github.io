import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar =()=>{
    return(
      <>
      
      <div className="container-fluid nav_bg">
      <div className="row">
      <div className="col-md-10 col-12 mx-auto mt-3">
      <div class="container" role="main">
    <div class="row">
        <div class="col-md-8 col-sm-8 col-xs-12">
            <h2>Newsletter</h2>
            <p>suscribe to our news letter</p>
        </div>

        <div class="col-md-4 col-sm-4 col-xs-12">

            <form action="" method="GET" class="form-main">

            <div class="col-md-10 col-sm-10 col-xs-12">
                <label class="sr-only" for="search">Done</label>
                <div class="input-group">
                    <input type="text" class="form-control input-search" name="q" id="search" placeholder="Search"/>
                    <span class="input-group-addon group-icon"/><span class="glyphicon glyphicon-user"></span>
                </div>
            </div>

            <div class="col-md-2 col-sm-2 col-xs-12 mt-2">
                <button type="submit" class="btn btn-success">
                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span><span class="hidden-sm hidden-xs"> Done </span>
                </button>
            </div>

        </form>  
          

    </div>
</div>
   
      
      </div>
      </div>
      </div>
      </div>
      </>
    );
};
export default Navbar;

                       