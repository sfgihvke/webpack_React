import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Home from '../components/home/home.jsx'

class Index extends Component{
    render(){
        return(
            <div>
                <h1 style={{color:'red',fontSize:'15px',}}>今天星期二</h1>
                <Home />
            </div>

        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('root'))