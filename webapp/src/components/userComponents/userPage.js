import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../navbar';
import Footer from '../footer';
import Login from '../loginComponents/loginPage';
import Bio from './bio';
import Link from './links';
import FactCard from './facts';
import './public/user.css';

class User extends React.Component{
    render() {
        return(
            <div className='user'>
                <nav>
                    <Navigation />
                </nav>

                <div className='heading'>
                <Container>
                    <div className='row d-flex flex-row flex-wrap justify-content-start'>
                        <section className='mt-3'>
                            <div className='d-flex flex-column align-items-start'>
                                <img alt="pfp" />
                                <p>Name: {this.props.first}, {this.props.last}</p>
                            </div>
                            <div className='d-flex flex-column align-items-end'>
                                {/*<Signin name="Austin Filoteo" />*/}
                                <p>{this.props.username}</p>
                                <button onClick={this.props.logOut}>Logout</button>
                            </div>
                        <br />
                        </section>
                    </div>
                </Container>
                </div>
                <div className='body'>
                    <br />
                        <div className='d-flex flex-row flex-wrap flex-grow-1 justify-content-center'>
                            <div className='d-flex flex-column-reverse justify-content-between' style={{ padding:'10px'}}>
                                <Bio bio={this.props.bio}/>
                                <br />
                                <Link links={this.props.links}/>
                            </div>
                            <div className='d-flex flex-column justify-content-evenly' style={{ padding:'10px'}}>
                                <FactCard facts={this.props.facts}/>
                            </div>
                        </div>
                    <br />
                    <br />
                    </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default User;