import React from 'react';
import Navigation from '../components/navbar';
import Signin from '../components/username';
import DataFetch from '../components/fetch';
import Footer from '../components/footer';

function User(){
    return(
        <div>
            <nav>
                <Navigation />
            </nav>
            User: Austin Filoteo
            <div>
                <Signin name="Austin" />
            </div>
            <div>
                <DataFetch />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default User;