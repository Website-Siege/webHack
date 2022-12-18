import React from 'react';
import './public/bio.css';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

class Bio extends React.Component{
    render (){
        return(
            <div>
                <MDBCard className='bio'>
                    <MDBCardHeader className='text-light'>Biography</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText className='text-light'>{this.props.bio}</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}

export default Bio;