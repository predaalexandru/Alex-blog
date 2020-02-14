export const createArticle = (article) => {
    // dispatch - dispatches an action to a reducers
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_ARTICLE', article});
    }
        
};