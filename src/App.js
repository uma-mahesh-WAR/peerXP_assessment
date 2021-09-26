import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Posts from "./screens/Posts";
import Links from "./screens/Links";
import { PostsProvider } from "./Contexts/PostsContext";

function App() {
	return (
		<BrowserRouter>
			<div className="content">
				<PostsProvider>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/links" component={Links} />
						<Route exact path="/posts" component={Posts} />
					</Switch>
				</PostsProvider>
			</div>
		</BrowserRouter>
	);
}

export default App;
