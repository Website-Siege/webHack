import React from 'react';
import { Container } from 'react-bootstrap';
import '../public/footer.css';

function Footer(){
    return(
        <div className='footerPage'>
                <div className='d-flex flex-row justify-content-between'>
                    <div className='col footer-top left-col'>
                        <section className='mt-3'>
                            <p className='footer-topic'>INFORMATION</p>
                            <div className='row'>
                                <div className='col'>
                                    <a className='footer-subtext' href='/about'>About Ban Sauce Incorporated</a>
                                    <br />
                                    <a className='footer-subtext' href='/about'>Our Goals</a>
                                </div>
                                <div className='col'>
                                    <p className='footer-topic'>CONTACT US</p>
                                    <p className='footer-email'>fake-email@gmail.com</p>
                                    <p className='footer-topic'>GET IN TOUCH</p>
                                    <p className='footer-subtext'>Send us a message!</p>
                                    <button className='mainButt'><a className="mainButt" href="/contact">SEND MESSAGE</a></button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
        </div>
    )
}

export default Footer;