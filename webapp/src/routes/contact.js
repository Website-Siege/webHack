import '../public/contact.css';
import Navigation from '../components/navbar';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from '../components/footer';

function Contact() {
  return (
    <div className="background">
    <div>
    <nav><Navigation /></nav>
    </div>
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='boxcolor p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Contact us</h2>
              <center><p className=" text-white-50 mb-5" >Have an issue or do you really like our sauce? Either way, send us a message!</p></center>

              <MDBInput wrapperClass='mb-4 mx-5 w-100 ' labelClass='text-white' label='Name' id='formControlLg' type='name' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white ' label='Email' id='formControlLg' type='email' size="lg"/>
              <textarea className = "hi" />
              <button className="submitB">Submit</button>
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
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
    <footer>
      <Footer />
    </footer>
    </div>
  );
}

export default Contact; 