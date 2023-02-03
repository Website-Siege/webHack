import form from 'react';
import '../public/contact.css';
import Navigation from '../components/navbar';
import React, { useState } from 'react';
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
import axios from 'axios';

function Contact({msgSent}) {
  const [sent, setSent] = useState(false)
  const [persname, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Clear-Site-Data": "*"
    }
  }

  const body = JSON.stringify({ persname, email, text })

  const handleSent = async(e) => {
    setSent(true)
    e.preventDefault()
    try{
      await axios.post(`/send_message`, {
        persname, email, text
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="background bg-dark bg-gradient">
    {!sent ? (
    <div>
    <div>
      <nav><Navigation /></nav>
    </div>
    <form action="/send_message" method="POST" onSubmit={handleSent}>
    <MDBContainer fluid className='formContainer'>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='boxcolor p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Contact us</h2>
              <center><p className=" text-white-50 mb-5" >Have an issue or do you really like our sauce? Either way, send us a message!</p></center>

              <MDBInput wrapperClass='mb-4 mx-5 w-100 ' labelClass='text-white' label='Name' id='formControlLg persname' type='persname' size="lg" value={persname} onChange={(e) => setName(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white ' label='Email' id='formControlLg email' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
              <MDBInput className='messageForm' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white ' label='Message' id='formControlLg text' type='text' value={text} size='lg' onChange={(e) => setText(e.target.value)} />
              <button className="submitB" type='submit'>Submit</button>
							{(msgSent !== "") ? (<div style={{color:'#c7423a'}}>{msgSent}</div>) : ""}
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
    </form>
    <footer>
      <Footer />
    </footer>
    </div>
    ) : (
      <Contact msgSent={"Message Sent"}/>
    )}
    </div>
  );
}

export default Contact; 