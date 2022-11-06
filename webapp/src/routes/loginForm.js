import React, { useState } from 'react'
import {Container} from 'react-bootstrap';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import '../public/loginForm.css';

//loginForm function, takes in login and error props from loginPage.js
function LoginForm({ Login, error }) {
	//details useState gets returned to Login const in loginPage.js for event listener if-else comparison
	const [details, setDetails] = useState({ name: "", email: "", password: "" });

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
			<div className='loginPage'>

					{/* Form rendering, onChange to listen for user events(inputs), setDetails is updated for details to be updated into condition in loginPage.js*/}
					<div className="form-inner">
						<MDBContainer fluid>
							<MDBRow className='d-flex justify-content-center align-items-center h-100'>
								<MDBCol col='12'>
									<MDBCard className='loginCard my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
										<MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
											<h2 className="fw-bold mb-2 text-uppercase">Login</h2>
											<p className="text-white-50 mb-5">Please enter your login and password!</p>
											<div className='d-flex flex-row justify-content-center'>
												<form>
													<div classname="form-group">
														<label htmlFor="email">Username:</label>
														<input type="email" name="email" id="email" required onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
													</div>
													{/*<MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='username' size="lg"/>*/}
													<div classname="form-group">
														<label htmlFor="password">Password:</label>
														<input type="password" name="password" id="password" required onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
														{/*<MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" /> */}
													</div>
												</form>
											</div>
											<p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
											<input type="submit" value="Login" />
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
											<div>
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
export default LoginForm

{/* 8:04  yt vid   */ }
