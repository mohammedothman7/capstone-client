import React from "react";

const NavBarView = (props) => {
    return(
        <div className = "container-fluid bg-light">
            <nav className="container navbar navbar-expand-lg navbar-light bg-light">
                <h3 className="text-danger">GameCord</h3>
                  <form className="form-inline my-2 my-lg-0" id="navBarWidth">
                   <input className="form-control mr-sm-2 ml-3" type="search" placeholder="Search"></input>
                   <button className="btn btn-outline-danger my-2 my-sm-0">Search</button>
                    </form>
            <div class="ml-auto p-1">
              <button  className="btn btn-outline-danger" >Login</button>
              <button  className="btn btn-outline-danger ml-1" >SignUp</button>
            </div>
            </nav>
        </div>
    );
};

export default NavBarView;