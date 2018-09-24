import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTasks } from '../actions/tasks'

class List extends Component {

    componentDidMount() {
        this.props.fetchTasks();
    }
    
    renderList() {
        return this.props.list.map((task) => {
            return  <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.detail}</td>
                    </tr>
        })
    }

    render () {
        return (
            <div>
                <p>List</p>
                <table>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.tasks
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        fetchTasks: fetchTasks
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);