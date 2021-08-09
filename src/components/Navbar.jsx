import React from 'react'
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function Navbar({data,setData}) {
    const ref = React.useRef();
    const history = useHistory();
    function searchAnime(value){
        axios(`https://anime5311.herokuapp.com/api/search/${value}/1`)
        .then((res)=>{
            setData(res.data.results);
            console.log(res.data)
            history.push('/')
        })
    }
    window.onscroll = () =>{
        if(window.scrollY > 30){
            document.getElementById('navabar').classList.add('class')
        }
        else{
            document.getElementById('navabar').classList.remove('class')
        }
    }
    return (
        <div className='navabar' id='navabar'>
            
            <h1 onClick={()=>{
                window.location.reload();
            }}>Stingrr</h1>
            <span id='search'>
            <input type="text" ref={ref} onKeyPress={(e)=>{
                console.log('hello')
                if(e.key === 'Enter'){ 
                    console.log('pressed')   
                    searchAnime(e.target.value);
                }
            }}/>
            <button onClick={()=>{
                searchAnime(ref.current.value);
            }}>
                <SearchIcon id='icon'/>
            </button>
            </span>
        </div>
    )
}

export default Navbar;
