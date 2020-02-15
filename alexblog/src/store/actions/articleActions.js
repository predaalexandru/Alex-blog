export const createArticle = (article) => {
    // dispatch - dispatches an action to a reducers
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch({type: 'CREATE_ARTICLE', article});
    }
        
};