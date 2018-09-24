import { FETCH_TASKS } from '../actions/tasks'

export default function tasksReducer(initialState=[], action) {
    switch(action.type) {
        case FETCH_TASKS:
        return action.payload;
        default:
        return initialState;
    }
}