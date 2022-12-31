import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import '../public/cardDefault.css';
import { MDBCardImage } from 'mdbreact';
import sauce from '../public/images/sauce.jfif';
import { Link } from 'react-router-dom';
class Card extends React.Component{
    render() {
        return(
            <div>
                <MDBCard className='cardDefault' background='secondary' alt='defaultImage'>
                    <MDBCardImage position='bottom' className='defaultImage' src={sauce} />
                        <MDBCardBody>
                            <MDBCardTitle className='cardTitle text-light'>{this.props.title}</MDBCardTitle>
                            <MDBCardText className='cardText text-light'>{this.props.content}</MDBCardText>
                                <Link to='/contact' style={{textDecoration: 'none'}}>
                                    <button className='mainButt' href='/contact'>Contact Us</button>
                                </Link>
                        </MDBCardBody>
                </MDBCard>
            </div>
        )
    }
}

export default Card;
