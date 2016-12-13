import React, { Component } from 'react'
import style from './style.css'
// export default class App extends Component {
//   constructor (props) {                       				
// 	  super(props)
// 	  this.state = {
// 		  num: 0
// 	  }
//     this._handerClick = this._handerClick.bind(this)
// 	  }
//   _handerClick() {
//     this.setState({num: this.state.num+1})
// 	  }
//   render () {
//   	const text = this.state.num
//     return (
//       <div onClick = {this._handerClick}>
//       you {text} this. Click to toggle
//       </div>                                            
//     )
//   }
// }

class GoBack extends React.Component {
   constructor (props) {
       super(props);
       this.state = {
           title: "默认标题"
       };
    }
     componentDidMount() {
        
    }
    goTop() {
        window.scrollTo(0, 0)
    }
    render () {
        return (
            <div className = "go-back" onClick = {this.goTop}>{this.props.title}
               </div>
        )
    }
  
    }
   
//   GoBack.defaultProps = {
//         title: '默认标题'
//   }
export  class Slider extends React.Component {
    constructor () {
        super();
        this.state = {
            title: '分类网址'
        }
    }
    componentDidMount() {
        var self = this;
        window.addEventListener('scroll', () => {
           console.log(111,window.scrollY);
           //如果scrollY大于500， 我们要显示返回定义。否则显示分类网址 
           if (window.scrollY > 500) {
               //更改状态
               self.setState({
                   title: '返回顶部'
               })
           } else {
               self.setState({
                  title:  '分类网址'
               })
           }
        })
    }
    render ()  {
        return  (
            <div className={style.slider}>
                <div>头条新闻</div>
                <GoBack  title={this.state.title}/>
            </div>
        )
    }
      
    }
