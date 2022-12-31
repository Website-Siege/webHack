import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';
import './public/facts.css';

//Fact MDBCard Component for User Page
class FactCard extends React.Component{
    render() {
        return(
            <div>
                <MDBCard className='facts'>
                    <MDBCardHeader className='text-light' style={{fontFamily: 'Bahnschrift'}}>Facts</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText className='text-light'>
                            {this.props.facts}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}

export default FactCard;