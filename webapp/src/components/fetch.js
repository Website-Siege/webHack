import React, { useState, useEffect } from 'react';

function DataFetch(){
    const [data, setData] = useState([]);
    const fetchData = () => {
        fetch('../../../backend/src/public/users.json'
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
        .then(function(json) {
            console.log(json);
            setData(json);
        })
    }
    useEffect(() => {
        fetchData();
    },[])
    return(
        <div>
        {
            data && data.length>0 && data.map((item) => <p>{item.about}</p>)
        }
        </div>
    )
}

export default DataFetch;