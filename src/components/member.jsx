import React, { Component } from 'react';


class Member extends Component {
    render() {
        return(
        <div className ="flex-container-member">
            <span 
                className="flex-container-member-name"> 
                {this.props.member.name}
            </span>
            
            <span
                className="flex-container-member-description">
                {this.props.member.describtion}
            </span>

            <div className ="flex-container-member-btn-container">
                <button 
                    onClick={() => this.formatDescription()} 
                    className="flex-container-member-btn">Details
                </button>

                <button 
                    onClick={() => this.props.onDelete(this.props.member.id)} 
                    className="flex-container-member-btn">Delete
                </button>
            </div>
        </div>
        );
    }


    formatDescription(){

    }

}
 
export default Member;