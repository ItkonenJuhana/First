import React, { Component } from 'react';
import Member from "./member";
import AddMember from "./addMember";


class  Members extends Component {
    state = {
        members: [
            {number: 0},
        ]
    };

    handleDelete = (memberName) => {
        localStorage.removeItem(memberName);;
    }

    render() { 
        return (
        <div>

            {this.state.members.map(member => (
                <Member    
                    key={member.id} 
                    onDelete={this.handleDelete} 
                    member ={member}
                />
            ))}
        </div>
        );
    }
}
 
export default Members ;