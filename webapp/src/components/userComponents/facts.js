import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './public/facts.css';

//Fact MDBCard Component for User Page
export default function FactCard(){
    return(
        <div>
            <MDBCard className='facts'>
                <MDBCardHeader className='text-light'>Facts</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle className='text-light'>Sample Text Input</MDBCardTitle>
                    <MDBCardText className='text-light'>Cause I like Pina Coladas and Getting Caught In The Rain</MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}