/** @format */

import React from "react";

export default function Header() {
	return (
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
			{/* Brand */}
			<a className="navbar-brand" href="#">
				Ecommerce
			</a>
			{/* Links */}
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" href="#">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						All products
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Categories
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Account
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Cart (0)
					</a>
				</li>
				{/* Dropdown */}
				{/* <li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle"
						href="#"
						id="navbardrop"
						data-toggle="dropdown"
					>
						Dropdown link
					</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							Link 1
						</a>
						<a className="dropdown-item" href="#">
							Link 2
						</a>
						<a className="dropdown-item" href="#">
							Link 3
						</a>
					</div>
				</li> */}
			</ul>
		</nav>
	);
}
