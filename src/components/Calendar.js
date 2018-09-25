import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchTasks } from '../actions/tasks'
import moment from 'moment';
import $ from 'jquery';
import 'fullcalendar';
import '/Users/ashleywang/Documents/Projects/react/task_management_application/node_modules/fullcalendar/dist/fullcalendar.css';
import Popup from '../components/Popup';


class Calendar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: 'aa'
        }
    }

    componentDidMount() {
        this.props.fetchTasks();

    }

    componentDidUpdate() {
        this.renderCalendar();
    }

    renderCalendar() {
        $('#calendar').fullCalendar({
            defaultView: 'month',
            events: this.props.events,
            editable: true,
            selectable: true,
            dayClick: (date, jsEvent, view) => {
                document.getElementById('myModal').style.display = "block";
                // alert('Clicked on: ' + date.format());
                this.setState({date: moment(date).toString()}, function() {
                    console.log(this.state.date);
                });
                // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
            
                // alert('Current view: ' + view.name);
            
                // change the day's background color just for fun
                // $(this).css('background-color', 'blue');
            
              }
        })
    }

    render() {
        return(
            <div id='calendar'>
                <Popup date={this.state.date} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchTasks: fetchTasks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);