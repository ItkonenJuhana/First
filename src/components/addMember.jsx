import React, { Component } from 'react';


class AddMember extends Component {

    constructor(props) {
                super(props);
                this.state = { 
                    newName: null ,
                    newDescription: null,
                    newComment: null
                };
            }
            // Three handler to keep constructor on date
            myChangeHandlerName = (event) => {
                this.setState({newName: event.target.value});
              }

            myChangeHandlerDescription = (event) => {
            this.setState({newDescription: event.target.value});
            }
            
            myChangeHandlerComment = (event) => {
            this.setState({newComment: event.target.value});
            }

    render() { 

        // Add a main container with form and buttons
        return(
        <div>
            <form id = "addMemberForm" >
               <div > 
                    <div >
                        <label >
                            Name:
                            <input type="text" name="name" onChange={this.myChangeHandlerName}/>
                        </label>

                        <label >
                            Description:
                            <input type="text" name="Description" onChange={this.myChangeHandlerDescription} />
                        </label>
                    </div>

                    <div>
                        <label >
                            Comment:
                            <input type="text" name="Comment" onChange={this.myChangeHandlerComment} />
                        </label>
                        
                        <div >
                            <input 
                                type="submit" 
                                value="Add" 
                                onClick={() => this.addMemberToLocalStorage( )}  
                            />

                            <input 
                                type="button" 
                                value="clear" 
                                onClick={() => this.clearAddMember()} 
                            />
                        </div>
                    </div>
                </div>
            </form>

        </div>
        );
    }

    // Clears form-element
    clearAddMember(){
        document.getElementById("addMemberForm").reset();
    }

    // Reads data from constructor and send it to local memory using name as key.
    addMemberToLocalStorage(){
        const { newName, newDescription, newComment } = this.state;;
        localStorage.setItem(newName, [newName, newDescription, newComment])
    }

}
 
export default AddMember;