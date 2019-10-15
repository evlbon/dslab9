import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "antd";

const SecondPage = () => {
    const [cat,setCat] = useState('');
    const [id, setId] = useState(0);
    useEffect(()=>{
        axios({
            "method": "Get",
            "url": 'https://api.thecatapi.com/v1/images/search',
        }).then(r=>{
            console.log(r.data[0].url);
            setCat(r.data[0].url)
        }).catch(e=>{
            console.log(e)
        })
    },[id]);

    const onClick = () => {
        setId(id+1)
    };

    return <div>
        <Button style={{margin:'5px 40%', width:'30%'}} type={'primary'} onClick={onClick}>Random Cat</Button>
        <img style={{margin:'0 15%', maxHeight:'80vh', width:'70%', float:'left'}}  src={cat}/>
    </div>
};

export default SecondPage