export const addFavourites = (data) => {
    return (dispatch, getState) => {
        if (getState().favourites.findIndex(d => d.company_name === data.company_name) === -1) {
            dispatch({ type: 'ADD_FAVOURITES', payload: data });
        } else {
            console.log("Elemento già presente in lista");
        }
    };
};

export const removeFavourites = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: 'REMOVE_FAVOURITES', payload: data });
    };
};

export const removeHeart = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: 'DELETE_HEART', payload: data })
    }
}