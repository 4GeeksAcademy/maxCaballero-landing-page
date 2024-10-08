import React from "react";

function Headers(){
    return(
        <div className="container ">
        <div className="row-md-12 justify-content-center bg-light">
            <div className="colmd-12">

                <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                    <div className="container-fluid ">
                      <a className="navbar-brand text-white" href="#">Navbar</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon color-white"></span>
                      </button>
                      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">                       
                        <div className="d-flex">                          
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link text-white" href="#">Link</a>
                          </li>                          
                          <li className="nav-item">
                            <a className="nav-link text-white" href="#">Link</a>
                          </li> 
                          <li className="nav-item">
                            <a className="nav-link text-white" href="#">Link</a>
                          </li> 
                          </ul>                         
                        </div>
                      </div>
                    </div>
                </nav>
            </div>
        </div>
        </div>
    );
};

export default Headers;