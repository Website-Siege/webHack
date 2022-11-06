import React, { useState } from 'react';
import LoginForm from '../../routes/loginForm';
import User from '../userComponents/userPage';

//logic for the for loginform
function Login(){
	//login credentials in json format
	const adminUser = {
		email: "admin@admin.com",
		password: "123"
	}
	//useState declaration for error rendering and user state updating
	const [user, setUser] = useState({name:"", email:""});
	const [error, setError] = useState("");
	//Login declaration to check user information and update useStates when conditions are met
	
	const Login = details => {
		console.log(details);
		//if user info is true update setUser state to details(event listener on loginForm.js)
		if(details.email === adminUser.email && details.password === adminUser.password){
			console.log("Logged in!");
			setUser({
				name: details.name,
				email: details.email	
			});
		}else{ //if information is false set error to the string DDNM
			setError("Incorrect Login");
			console.log("Incorrect Login");
			
		}
	}
	//clears user information after logging out
	const logout = () =>{
		setUser({ name:"", email:""});
	}

	//short hand if-else condition (I.E. {(condition) ?(if) true :(or) false})
	return( 
		<div className="Login">
			{/*if email isn't empty string, render user page */}
			{(user.email !== "") ? (
				<User logOut={logout}/>
			) : (
				<LoginForm Login={Login} error={error}/> //else return login page with an error
			)}
		</div>
	);
}

export default Login;