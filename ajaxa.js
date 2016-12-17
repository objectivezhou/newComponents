import React,{Compontent} from 'react'
import skins from './skins.css'


const ajax = (url, fn) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              fn && fn (JSON.parse(xhr.responseText));
            }
        }
    }
    xhr.open('GET',url, true);
    xhr.send(null);
}

export default class Skin extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            list: []
            };
    }
    changeBg(e)  {
        const id  = e.currentTarget.getAttribute('data-id');
        const url = '../build/skin/big_' + id + '.jpg'
        document.body.style.backgroundImage = 'url(' +  url + ')';
    }
    
    createList()  { 
        const me = this;
        return this.state.list.map( (value, index) =>{
            return (
               <li key = {index} data-id = {value.id} onClick = {e => me.changeBg(e)}>
               <img src={'../build/skin/' +value.src} alt = "" />
               <p>{value.title}</p>
               </li>
                )
            })
       }
    componentDidMount () {
        const me = this;
        ajax('../build/data/skin.json', (res) => {
            if (res&&res.errno === 0) {
                me.setState({
                    list: res.data
                })
            }
        })
    }
    render () {
        return (
            <div className = {skins.skin}>
                <div className = {skins.container}>
                    <ul>{this.createList()}</ul>
                </div>
             </div>
        )
    }
} 


