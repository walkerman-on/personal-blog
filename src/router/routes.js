import React from "react"
import About from "../pages/About"
import PostIdPage from "../pages/PostIdPage"
import Posts from "../pages/Posts"
import Login from "../pages/Login"

export const privateRoutes = [
	{ path: "/about", element: <About /> },
	{ path: "/posts", element: <Posts /> },
	{ path: "/", element: <Posts /> },
	{ path: "/posts/:id", element: <PostIdPage /> },
]

export const publicRoutes = [
	{ path: "/login", element: <Login /> },
	{ path: "/about", element: <About /> },
]
