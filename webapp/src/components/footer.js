import React from 'react';
import { Container } from 'react-bootstrap';
import '../public/footer.css';

function Footer(){
    return(
        <div className='footerPage'>
            <Container fluid className="footer-bg col">
                <div className='d-flex flex-row justify-content-between'>
                    <div className='col footer-top left-col'>
                        <section className='mt-3'>
                            <p className='footer-topic'>INFORMATION</p>
                            <div className='row'>
                                <div className='col'>
                                    <a className='footer-subtext'>About Ban Sauce Incorporated</a>
                                    <a className='footer-subtext'>Our Goals</a>
                                </div>
                                <div className='col'>
                                    <p className='footer-topic'>CONTACT US</p>
                                    <h5 id='footer-email'>thisemaildoesntexist@gmail.com</h5>
                                    <p className='footer-topic'>GET IN TOUCH</p>
                                    <p className='footer-subtext'>Send us a message!</p>
                                    <button className='btn send-btn'><a href="/contact">SEND MESSAGE</a></button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;