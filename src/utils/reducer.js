const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USERS":
            state = { ...state, users: action.payload }
            return state;
        case "LOGGED_IN":
            state = { ...state, loggedIn: action.payload }
            return state
        default:
            return state;
    }
}
export default reducer