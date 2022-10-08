import React from 'react';
import Navigation from '../components/navbar';
import Signin from '../components/username';
import DataFetch from '../components/fetch';
import Footer from '../components/footer';
import { MDBCard } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import '../public/user.css';

function User(){
    return(
        <div className='user'>
            <nav>
                <Navigation />
            </nav>
            <div className='heading'>
                <Container>
                <div className='d-flex flex-row justify-content-between'>
                <div className='col left-col'>
                    <section className='mt-3'>
                    <div className='row'>
                        <div className='col'>
                            <div className='row'>
                                <div className='col'>
                                    <img alt="pfp" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <p>First Name</p>
                                </div>
                                <div className='col'>
                                    <p>Last Name</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <Signin name="Test Username" />
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <button> Settings </button>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
                </div>
                </Container>
            </div>
            <div className='body'>
                <br />
                <Container>
                    <div className='row'>
                        <div className='col'>
                            <MDBCard>
                                Bio
                            </MDBCard>
                            <MDBCard>
                                Social Media Links
                            </MDBCard>
                        </div>
                        <div className='col'>
                            <MDBCard>
                                Fun Facts
                            </MDBCard>
                        </div>
                    </div>
                </Container>
            <br />
            <br />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default User;