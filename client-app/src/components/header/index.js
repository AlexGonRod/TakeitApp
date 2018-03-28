import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './styles/main.css';


class Header extends Component {
	
	logOut = () => {
		
		localStorage.removeItem('token')
	}
render(){
	return (

		<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
			<NavLink id="logo" className="nav-link" to="/user">WhiteBalance</NavLink>
			<button className="navbar-toggler" type="button" data-toggle="dropdown" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<i className="far fa-user"></i>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav">
					<li className="nav-item" />
					<NavLink id="follow" className="nav-link" to="/following">Following</NavLink>
				</ul>
				<ul className="navbar-nav">
					<li className="nav-item" />
					<NavLink id="tofollow" className="nav-link" to="/tofollow">To follow</NavLink>
				</ul>
            
				<ul className="navbar-nav ml-auto ">
					<li className="nav-item">
						<NavLink id="fupload" className="nav-link" to="/upload"><i className="fas fa-cloud-upload-alt"></i></NavLink>
					</li>
					
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i className="far fa-user"></i>
						</a>
						<div className="dropdown-menu dropdown-inverse dropdown-menu-right" id="navbarSupportedContent" aria-labelledby="navbarDropdown">
							<NavLink id="follow" className="nav-link" to="/user">Profile</NavLink>
							<NavLink id="follow" className="nav-link" to="/account">Settings</NavLink>
							<NavLink id="follow" className="nav-link" to ="/" onClick={this.logOut}>Logout</NavLink>
						</div>
					</li>
				</ul>

			</div>
		</nav >

	);

}
}

export default Header;
