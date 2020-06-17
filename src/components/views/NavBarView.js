import React from 'react';
import './styles/NavBarView.css';
import { Link } from 'react-router-dom';

const NavBarView = (props) => {
  return (
    <div className='container-fluid bg-light'>
      <nav className='container navbar navbar-expand-lg navbar-light bg-light'>
        <div className='d-flex'>
          <div className='logo2 mr-1'> </div>
          <h3 className='text-danger'>GameCord</h3>
        </div>
        <form className='form-inline my-2 my-lg-0' id='navBarWidth'>
          <input
            className='form-control mr-sm-2 ml-3'
            type='search'
            placeholder='Search'
            value={props.search}
            onChange={props.handleChange}
          ></input>
          <button
            className='btn btn-outline-danger my-2 my-sm-0'
            onClick={props.handleClick}
          >
            Search
          </button>
        </form>
        <div className='ml-auto p-1'>
          <Link to='/login' className='btn btn-outline-danger'>
            Login
          </Link>
          <Link to='/register' className='btn btn-outline-danger ml-2'>
            Register
          </Link>
          <Link to='/about' className='btn btn-outline-danger ml-2'>
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBarView;
