import React from 'react';
import Navigation from '../components/navbar';
import '../public/loginForm.css';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import Footer from '../components/footer';

function Login(){
	return(
		<div className='loginPage'>
			<nav>
				<Navigation />
			</nav>
			<form>
				<MDBContainer fluid>
      				<MDBRow className='d-flex justify-content-center align-items-center h-100'>
        				<MDBCol col='12'>
          					<MDBCard className='loginCard my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            					<MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              							<h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              							<p className="text-white-50 mb-5">Please enter your login and password!</p>
										<form>
											<div className='input-container'>
												<label>Username</label>
												<input type="text" name="uname" required />
											{/*<MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='username' size="lg"/>*/}
											</div>
											<div className='input-container'>
												<label>Password</label>
												<input type="password" name='pass' required />
              								{/*<MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" /> */}
											</div>
										</form>
              							<p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              							<MDBBtn outline className='mx-2 px-5' size='lg' style={{color: 'white'}}>Login</MDBBtn>
              							<div className='d-flex flex-row mt-3 mb-5'>
                							<MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  								<MDBIcon fab icon='facebook-f' size="lg"/>
                							</MDBBtn>
                							<MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  								<MDBIcon fab icon='twitter' size="lg"/>
                							</MDBBtn>
                							<MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  								<MDBIcon fab icon='google' size="lg"/>
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
			</form>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default Login;
