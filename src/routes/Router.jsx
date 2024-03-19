/** @format */

import React from "react";
import { useRoutes } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export default function Router() {
	const routing = useRoutes([
		{
			path: "/",
			element: <HomeLayout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/login",
					element: <Login />,
				},
				{
					path: "/signup",
					element: <Signup />,
				},
			],
		},
		{
			path: "/admin",
			element: <AdminLayout />,
		},
	]);

	return routing;
}
