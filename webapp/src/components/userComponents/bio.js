import React from 'react';
import './public/bio.css';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';


function Bio(){
    return(
        <div>
            <MDBCard className='bio'>
                <MDBCardHeader className='text-light'>Biography</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle className='text-light'>Sample Text Input</MDBCardTitle>
                    <MDBCardText className='text-light'>Cause I like Pina Coladas and Getting Caught In The Rain</MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default Bio;