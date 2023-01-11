import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../navbar';
import Footer from '../footer';
import Bio from './bio';
import Link from './links';
import FactCard from './facts';
import './public/user.css';
import Grandma from '../../public/images/grandma.jpg';

class User extends React.Component{
    render() {
        return(
            <div className='user'>
                <nav>
                    <Navigation />
                </nav>

                <div className='heading'>
                <Container>
                    <div className='d-flex flex-row flex-wrap flex-grow-1 justify-content-center' style={{paddingTop: '30px', paddingBottom: '20px'}}>
                            <div className='d-flex flex-column align-items-start'>
                                <img alt="pfp" src={Grandma} style={{width:'75px', height:'auto', borderRadius:'75px'}}/>
                                <p className='persName'>{this.props.first}, {this.props.last}</p>
                            </div>
                            <div className='d-flex flex-column align-items-end'>
                                <p className='userName'>Username: {this.props.username}</p>
                                <button className="logButton" onClick={this.props.logOut}>Logout</button>
                            </div>
                        <br />
                    </div>
                </Container>
                </div>
                <div className='body bg-dark bg-gradient'>
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