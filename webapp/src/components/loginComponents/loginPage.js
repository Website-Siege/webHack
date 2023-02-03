import React, { useState } from 'react';
import LoginForm from '../../routes/loginForm';
import User from '../userComponents/userPage';
import Users from '../../usr/users.json';

//logic for the loginform
function Login(){
	//Login declaration to check user information and update useStates when conditions are met
	let adminUser = {
		username: Users.username,
		password: Users.password
	}
	let i = 0;
	const Login = details => {
		console.log(details);
		for(i; i < Users.length; i++){
			if(details.username === Users[i].username && details.password === Users[i].password){
				setUser({
					username: details.username,
					password: details.password,
					first: Users[i].first,
					last: Users[i].last,
					bio: Users[i].info.bio,
					facts: Users[i].info.facts,
					links: Users[i].info.links
				});
				console.log("Logged In");
				break;
			}
			else{
				setUser({
					username: "",
					password: "",
					first: "",
					last: "",
					bio: "",
					facts: "",
					links: ""
				})
				setError("Incorrect Login");
			}
		}
	}
	//login credentials in json format
	
	//useState declaration for error rendering and user state updating
	const [user, setUser] = useState({username:"", password:"", first:"", last:"", bio:"", facts:"", links:""});
	const [error, setError] = useState("");
	
	//clears user information after logging out
	const logout = () =>{
		setUser({ username:"", password:"", first:"", last:"", bio:"", facts:"", links:""});
	}

	//short hand if-else condition (I.E. {(condition) ?(if) true :(or) false})
	return( 
		<div className="Login">
			{/*if email isn't empty string, render user page */}
			{(user.username !== "") ? (
				<User logOut={logout} first={user.first} last={user.last} username={user.username} bio={user.bio} links={user.links} facts={user.facts} />
			) : (
				<LoginForm Login={Login} error={error}/> //else return login page with an error
			)}
		</div>
	);
}

export default Login;