import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './public/links.css';

function Link(){
    return(
        <div>
            <MDBCard className='links'>
                <MDBCardHeader className='text-light'>Links</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle className='text-light'>Sample Text Input</MDBCardTitle>
                    <MDBCardText className='text-light'>Cause I like Pina Coladas and Getting Caught In The Rain</MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default Link;