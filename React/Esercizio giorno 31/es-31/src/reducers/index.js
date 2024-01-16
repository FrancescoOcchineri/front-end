export default function index(state = [], action) {
    switch (action.type) {
        case "ADD_FAVOURITES":
            return [...state, action.payload]

        case "DELETE_FAVOURITES":
            return state.filter(d => d.company_name !== action.payload.company_name)

        default:
            return state;
    }
}
