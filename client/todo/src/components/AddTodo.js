import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
                <div >
                <form >
                    <input type="text" className="form-control rounded-0" placeholder="Write your todo here"/>
                    <button className="form-control rounded-0 btn-secondary" type="submit">Add Todo</button>
                </form>
                </div>
        )
    }
}
