import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';
import './public/links.css';

class Link extends React.Component{
    render (){
        return(
            <div>
                <MDBCard className='links'>
                    <MDBCardHeader className='text-light' style={{fontFamily: 'Bahnschrift'}}>Links</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText className='text-light'>{this.props.links}</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}

export default Link;