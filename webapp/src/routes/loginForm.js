import React, { useState } from 'react'
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import '../public/loginForm.css';

//loginForm function, takes in login and error props from loginPage.js
function LoginForm({ Login, error }) {
	//details useState gets returned to Login const in loginPage.js for event listener if-else comparison
	const [details, setDetails] = useState({ username: "", password: "" });

	//event handler const declaration
	const submitHandler = e => {
		e.preventDefault();
		Login(details);
	}
	// this is what we see on the front page
	return (
		<form onSubmit={submitHandler}>
			<nav>
				<Navigation />
			</nav>
			<div className='loginPage bg-dark bg-gradient'>
					{/* Form rendering, onChange to listen for user events(inputs), setDetails is updated for details to be updated into condition in loginPage.js*/}
					<div className="form-inner">
						<MDBContainer fluid>
							<MDBRow className='d-flex justify-content-center align-items-center h-100'>
								<MDBCol col='12'>
									<MDBCard className='loginCard my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
										<MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
											<h2 className="fw-bold text-uppercase">Login</h2>
											<p className="loginText text-white-50">Please enter your login and password!</p>
											<div className='d-flex flex-row justify-content-center'>
												<form>
													<div classname="form-group">
														<label htmlFor="email">Username:</label>
														<input type="username" name="username" id="username" required onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
													</div>
													<div classname="form-group">
														<label htmlFor="password">Password:</label>
														<input type="password" name="password" id="password" required onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
													</div>
												</form>
											</div>
											<p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
											<input className='loginButt' type="submit" value="Login" />
											{(error !== "") ? (<div className="error" style={{color:'#c7423a'}}>{error}</div>) : ""}
											<div className='d-flex flex-row mt-3 mb-5'>
												<MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
													<MDBIcon fab icon='facebook-f' size="lg" />
												</MDBBtn>
												<MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
													<MDBIcon fab icon='twitter' size="lg" />
												</MDBBtn>
												<MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
													<MDBIcon fab icon='google' size="lg" />
												</MDBBtn>
											</div>
											<div className='loginFooter'>
												<p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
											</div>
										</MDBCardBody>
									</MDBCard>
								</MDBCol>
							</MDBRow>
						</MDBContainer>
					</div>
				</div>
				<footer>
					<Footer />
				</footer>
		</form>
	)
}
export default LoginForm;