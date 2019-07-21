let defaultState = {
    isLogin: false,
    user: {},
    passwords: [],
    currentPassword: {},
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case `NEW_PASSWORD`:
            return {
                ...state,
                currentPassword: action.payload,
            }

        case `CREATE_PASSWORD`:
            return {
                ...state,
                passwords: [...state.passwords, action.payload]
            }

        case `EDIT_PASSWORD`:
            let editedPasswords = state.passwords.map(password => {
                if (password._id === action.payload._id) password = action.payload
                return password
            })
            return {
                ...state,
                passwords: editedPasswords
            }

        case `DELETE_PASSWORD`:
            let filteredPasswords = state.passwords.filter(password => {
                if (password._id === action.payload._id) {
                    return false
                }
                else {
                    return true
                }
            })
            return {
                ...state,
                passwords: filteredPasswords
            }

        case 'PERSIST_LOGIN':
            return {
                ...state,
                isLogin: true,
            }

        case 'API_GET': {
            return {
                ...state,
                [action.key]: action.payload
            }
        }

        case 'USER_LOGIN': {
            return {
                ...state,
                isLogin: true,
                user: action.payload
            }
        }

        case 'USER_LOGOUT': {
            return {
                ...state,
                isLogin: false,
                user: {}
            }
        }

        default: return state
    }
}

export default reducer