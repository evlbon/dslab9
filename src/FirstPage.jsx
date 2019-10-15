import React, {useEffect, useState} from "react";
import axios from 'axios'
import {Button} from "antd";

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const FirstPage = () => {
    const [memes,setMeme] = useState('');
    const [id, setId] = useState(0);
    useEffect(()=>{
        axios({
            "method": "Get",
            "url": 'https://api.imgflip.com/get_memes',
        }).then(r=>{
            console.log(r.data.data.memes);
            setMeme(r.data.data.memes);
        }).catch(e=>{
            console.log(e)
        })
    },[]);

    const onClick = () => {
        setId(randomInteger(0,memes.length))
    };

    return <div>
        <Button style={{margin:'5px 40%', width:'30%'}} type={'primary'} onClick={onClick}>Random meme</Button>
        <img style={{margin:'0 15%', maxHeight:'80vh', width:'70%', float:'left'}} src={memes[id]? memes[id].url:''}/>

    </div>
};

export default FirstPage;