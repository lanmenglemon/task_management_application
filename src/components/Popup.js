import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import '../css/Popup.css'

class Popup extends Component{
    
    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input type="text"/>
            </div>
            )
        }
        
        render() {
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target === document.getElementById('myModal')) {
                    document.getElementById('myModal').style.display = "none";
                }
            }
            return(
                <div>
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="close" onClick={() => {document.getElementById('myModal').style.display = "none"}}>&times;</span>
                            </div>
                            <div>
                                <form>
                                    <Field 
                                        label="Title"
                                        name="title"
                                        component="input"
                                        placeholder="Title"
                                    />
                                    <Field 
                                        label="Description"
                                        name="description"
                                        component="input"
                                        placeholder="Description"
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
                )
            }
        }
        
        export default reduxForm({
            form: "NewTaskForm"
        })(Popup);