import React from "react";
import {Icon} from "antd";
import {withRouter} from 'react-router-dom';

const ThirdPage = ({history}) => {
    return <div>
        <div style={{
            fontSize: 'large',
            backgroundImage: 'url(https://art.pixilart.com/71406ad5064e4f0.gif)',
        }}>
            <img style={{display: 'inline-block', width: '30%'}}
                 src={'https://discordemoji.com/assets/emoji/1216_ricardo.png'}/>
            <div style={{
                display: 'inline-block',
                width: '40%',
                borderRadius: 10,
                background: 'white',
                padding: 5,
                textAlign: 'center'
            }}>
                <h1> It is my lab 9 assignment website, here you can relax and watch some memes and cats
                    pictures))))</h1>
            </div>
            <img style={{display: 'inline-block', width: '30%'}}
                 src={'https://cdn130.picsart.com/297638030146211.png'}/>
        </div>

        <div className={'ant-btn demo rainbow'}
             onClick={()=>{history.push('/firstPage/')}}
             style={{
                 height: '30vh',
                 textAlign: "center",
                 padding: '6vh 0',
                 fontSize: '10vh',
                 margin: '5vh',
                 float: "left",
                 width: '40vw',
             }}>
            <Icon type="double-left" />MEMES<Icon type="smile" theme="outlined" spin/>
        </div>
        <div className={'ant-btn demo rainbow'}
             onClick={()=>{history.push('/secondPage/')}}
             style={{
                 height: '30vh',
                 textAlign: "center",
                 padding: '6vh 0',
                 fontSize: '10vh',
                 margin: '5vh',
                 float: "right",
                 width: '40vw',
             }}>
            <Icon type="smile" theme="outlined" spin />CATS<Icon type="double-right" />
        </div>
    </div>
};

export default withRouter(ThirdPage)