import React from 'react'
import './Main.css';
import axios from 'axios'
import {useHistory} from 'react-router-dom';
function Main({data}) {
    const history = useHistory();
    function checkLength(string){
        if(string.length > 30){
            var re = string.substr(30);
            return string.replace(re,'...')
        }
        else{
            return string;
        }
    }
    return (
        <div className='main'>
            {
                data.length!=0?
                data.map((item)=>{
                    return(
                        <div className='card' onClick={()=>{
                            history.push('/info/'+item.id)
                        }}>
                            <img src={item.image} alt="" />
                            <h4> {checkLength(item.title)} </h4>
                        </div>
                    )
                })
                :
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default Main
