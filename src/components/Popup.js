import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../css/Popup.css';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';

class Popup extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            start: moment()
        }
    }

    handleChange = (date) => {
        this.setState({
            start: date
        });
      }

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
                                        component={this.renderField}
                                        placeholder="Title"
                                    />
                                    <Field 
                                        label="Description"
                                        name="description"
                                        component={this.renderField}
                                        placeholder="Description"
                                    />
                                    <DatePicker
                                        selected={this.state.start}
                                        onChange={this.handleChange}
                                    />
                                    <label>{this.props.date}</label>
                                    <br />
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