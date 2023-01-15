import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardFooter, MDBCardHeader } from 'mdb-react-ui-kit';
import '../public/aboutCard.css';

class AboutCard extends React.Component{
    render() {
        return(
            <div>
                <MDBCard className="aboutCard" alignment="center">
                    <MDBCardImage position="top" className='aboutImage' src={this.props.memPic}></MDBCardImage>
                    <MDBCardBody>
                        <MDBCardHeader>
                            <MDBCardTitle>
                                {this.props.member}
                                <MDBCardTitle className="positionName text-white-50">{this.props.position}</MDBCardTitle>
                            </MDBCardTitle>
                        </MDBCardHeader>
                        <MDBCardFooter>
                            <MDBCardText className="aboutText text-light">{this.props.context}</MDBCardText>
                        </MDBCardFooter>
                    </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}

export default AboutCard;