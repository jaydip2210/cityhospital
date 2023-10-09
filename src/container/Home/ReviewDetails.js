import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ReviewDetails(props) {
    const [rData, setRdata] = useState([]);

    const {id} = useParams();

    const getData = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/comments"); 

        let data = await response.json();
        // setRdata(data);
        // console.log(data);

        let fData = data.filter((v, i) => v.id == id)  //id 6 a params thi male 
        setRdata(fData[0]);
    }

    useEffect(() => {
        getData();
    })

    console.log(rData);

    return (
        <div>
            <h1>Review Details {id}</h1>

            <h2>{rData.name}</h2>
            <h3>{rData.body}</h3>
        </div>
    );
}

export default ReviewDetails;