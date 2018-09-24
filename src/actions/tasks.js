export const FETCH_TASKS = "FETCH_TASKS";
export const CREATE_TASK = "CREATE_TASK";

export function fetchTasks() {
    return (dispatch) => {
        fetch('http://localhost:4000/fetchTasks')
        .then((resp) => resp.json())
        .then((respJSON) => {
            dispatch({
                type: FETCH_TASKS,
                payload: respJSON
            })
        });
    };
}

export function createTask(task) {
    return (dispatch) => {
        fetch('http://localhost:4000/createTask', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 3, 
                title: "task3", 
                detail: "this is task3",
                start: '2018-09-03T13:13:55-0400',
                end: '2018-09-03T13:13:55-0400',
                allDay: true
            })
        })
    }
}