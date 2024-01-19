export default function favouritesReducer(state = [], action) {
    switch (action.type) {
        case "ADD_FAVOURITES":
            return [...state, action.payload]

        case "REMOVE_FAVOURITES":
            return state.filter(d => d.company_name !== action.payload.company_name)

        case "DELETE_HEART":
            return state.filter(h => h.company_name !== action.payload.company_name)

        default:
            return state;
    }
}
