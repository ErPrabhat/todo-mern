import React, { Component } from 'react'
import axios from 'axios'
const Context =React.createContext()
const reducer = (prevstate,action)=>{
    console.log(action.type)
    
    switch(action.type){
        
        case "TOGGLE":
            return { todos:prevstate.todos.map(t=>{if(t._id===action.payload){
                
                t.complete=!t.complete
                
            };return t}) 
        
        }
        case "REMOVE":
            return{todos:prevstate.todos.filter(todo=> todo._id !==action.payload)}
        case "ADD":
            return{todos:[...prevstate.todos,action.payload]}
        default:
            
            return prevstate   
        }
}
export  class Provider extends Component {
    state={
        todos:[]
    ,
    dispatch:(action)=>this.setState(prevstate=>reducer(prevstate,action))
    }

    componentDidMount(){
        axios.get("/todos").then(res=>this.setState({todos:res.data}))
    }
    render() {
        return (
           <Context.Provider value={this.state}>
              {this.props.children}
           </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer