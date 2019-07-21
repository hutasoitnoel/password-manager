import Axios from 'axios'
import Swal from 'sweetalert2'

const port = 'http://localhost:3000'

export function getPasswords() {
    return dispatch => {
        Axios
            .get(`${port}/password`, { headers: { token: localStorage.token } })
            .then(({ data }) => {
                console.log(data)
                dispatch({
                    type: "API_GET",
                    payload: data,
                    key: "passwords"
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function newPassword() {
    return dispatch => {
        dispatch({
            type: "NEW_PASSWORD",
            payload: { account: "", email: "", password: "" }
        })
    }
}

export function persistLogin() {
    return (dispatch, getState) => {
        dispatch({ type: `PERSIST_LOGIN` })
    }
}

export function actionLogin(input, history) {
    return (getState, dispatch) => {
        Axios
            .post(`${port}/user/login`, input)
            .then(({ data }) => {
                localStorage.token = data.token
                history.push('/')
                dispatch({
                    type: "USER_LOGIN",
                    payload: data,
                })
                Swal.fire(
                    `Hi ${data.username}!`,
                    `You successfully logged in`,
                    'success'
                )
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    type: 'error',
                    title: 'Not found!',
                    text: 'Incorrect email / password'
                })
            })
    }
}

export function actionLogout(history) {
    return dispatch => {
        history.push('/login')
        delete localStorage.token
        dispatch({
            type: "USER_LOGOUT"
        })
        Swal.fire(
            `Bye!`,
            `Come again`,
            'success'
        )
    }
}

export function actionRegister(input) {
    console.log(input)
    return dispatch => {
        Axios
            .post(`${port}/user/register`, input)
            .then(({ data }) => {
                console.log("register success")
                console.log(data)
                Swal.fire(
                    `Congrats!`,
                    `You can now log in`,
                    'success'
                )
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    type: 'error',
                    title: 'Oh no!',
                    text: 'Registration error'
                })
            })
    }
}

export function actionView(id) {
    return dispatch => {
        Axios
            .get(`http://localhost:3000/password/${id}`, { headers: { token: localStorage.token } })
            .then(({ data }) => {
                console.log("view berhasil")
                console.log(data)
                dispatch({
                    type: "API_GET",
                    payload: data,
                    key: "currentPassword"
                })
            })
            .catch(err => {
                console.log('view error')
                console.log(err)
            })
    }
}

export function actionCreate(input) {
    return dispatch => {
        Axios
            .post(`${port}/password`, input, { headers: { token: localStorage.token } })
            .then(({ data }) => {
                console.log(data)
                dispatch({
                    type: "CREATE_PASSWORD",
                    payload: data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function actionEdit(id, input) {
    return dispatch => {
        Axios
            .patch(`${port}/password/${id}`, input, { headers: { token: localStorage.token } })
            .then(({ data }) => {
                dispatch({
                    type: "EDIT_PASSWORD",
                    payload: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function actionDelete(id) {
    return dispatch => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.value) {
                    Axios
                        .delete(`http://localhost:3000/password/${id}`, { headers: { token: localStorage.token } })
                        .then(({ data }) => {
                            console.log("delete success")
                            dispatch({
                                type: "DELETE_PASSWORD",
                                payload: data,
                            })
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        })
                        .catch(err => {
                            console.log("delete error")
                            console.log(err)
                        })
                }
            })
    }
}