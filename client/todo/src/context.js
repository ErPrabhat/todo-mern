import React, { Component } from 'react'
const Context =React.createContext()
const reducer = (prevstate,action)=>{
    console.log(action.type)
    
    switch(action.type){
        
        case "TOGGLE":
            return { todos:prevstate.todos.map(t=>{if(t.id===action.payload){
                console.log(t.complete,t.id,action.payload)
                t.complete=!t.complete
                console.log(t.complete) 
            };return t}) 
        
        }
        default:
            
            return prevstate   
        }
}
export  class Provider extends Component {
    state={
        todos:[{id:1,title:"check-emails",complete:false},
        {id:2,title:"check-voicemails",complete:false},
        {id:3,title:"check-reports",complete:false},

    ]
    ,
    dispatch:(action)=>this.setState(prevstate=>reducer(prevstate,action))
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