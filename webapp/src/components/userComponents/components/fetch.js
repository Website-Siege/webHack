import React, { useEffect, useState } from 'react';
import User from '../userPage';

export default function Fetch(){
    const [user, setUser] = useState({first:"", last:""});
    const getData = () => {
        fetch('./public/users/user.json'
        ,{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson){
            console.log(myJson)
            setUser({
                first: myJson.first, 
                last: myJson.last
            })
        })
    }
    useEffect(() => {
        getData()
    },[])
    return(
        <div className='fetch'>
            {
                <User name={user} />
            }
        </div>
    )
}