import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked : false
        }
    }

    onClick = (isChecked) => {
        this.setState({
            isChecked
        })
    }

    render() {
        var {isChecked} = this.state;
        return (
            <div>
                contact
                <br />
                <button type="button" className="btn btn-danger" onClick ={() => this.onClick(true)}>Khong cho phep</button>
                <br />
                <button type="button" className="btn btn-success" onClick ={() => this.onClick(false)}>Cho phep</button>
                
                <Prompt 
                    when = {isChecked}
                    message={location =>
                        `Are you sure you want to go to ${location.pathname}`
                      }
                />
            </div>
        );
    }
}

export default contact;