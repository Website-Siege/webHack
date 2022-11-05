import React, {useState} from 'react';
import Navigation from '../components/navbar';
import '../public/loginForm.css';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import Footer from '../components/footer';
import LoginForm from './LoginForm';
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
	const Login = details =>{
		console.log(details);
		//if user info is true update setUser state to details(event listener on loginForm.js)
		if(details.email == adminUser.email && details.password == adminUser.password){
			console.log("Logged in!");
			setUser({
				name: details.name,
				email: details.email	
			});
		}else{ //if information is false set error to the string DDNM
			setError("Details Do Not match");
			console.log("Details Do Not match");
			
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
			{(user.email != "") ? (
				<div className="Welcome">
					<h2>Welcome, <span> {user.name}</span></h2>
					<button onClick={logout}>Logout</button>

				</div>
			) : (
				<LoginForm Login={Login} error ={error}/> //else return login page with an error
			)}
		</div>
	);
}

export default Login;
// {
// return(
// 	<div className='loginPage'>
// 		<nav>
// 			<Navigation />
// 		</nav>
// 		<form>
// 			<MDBContainer fluid>
// 				  <MDBRow className='d-flex justify-content-center align-items-center h-100'>
// 					<MDBCol col='12'>
// 						  <MDBCard className='loginCard my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
// 							<MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
// 									  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
// 									  <p className="text-white-50 mb-5">Please enter your login and password!</p>
// 									<form>
// 										<div className='input-container'>
// 											<label>Username</label>
// 											<input type="text" name="uname" required />
// 										{/*<MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='username' size="lg"/>*/}
// 										</div>
// 										<div className='input-container'>
// 											<label>Password</label>
// 											<input type="password" name='pass' required />
// 										  {/*<MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" /> */}
// 										</div>
// 									</form>
// 									  <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
// 									  <MDBBtn outline className='mx-2 px-5' size='lg' style={{color: 'white'}}>Login</MDBBtn>
// 									  <div className='d-flex flex-row mt-3 mb-5'>
// 										<MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
// 											  <MDBIcon fab icon='facebook-f' size="lg"/>
// 										</MDBBtn>
// 										<MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
// 											  <MDBIcon fab icon='twitter' size="lg"/>
// 										</MDBBtn>
// 										<MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
// 											  <MDBIcon fab icon='google' size="lg"/>
// 										</MDBBtn>
// 									  </div>		
// 									  <div>
// 										<p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
// 									</div>
// 								</MDBCardBody>
// 						  </MDBCard>
// 					</MDBCol>
// 				  </MDBRow>
// 			</MDBContainer>
// 		</form>
// 		<footer>
// 			<Footer />
// 		</footer>
// 	</div>
// 	)
// }