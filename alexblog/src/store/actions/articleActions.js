export const createArticle = (article) => {
    // dispatch - dispatches an action to a reducers
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('articles').add({
            ...article,
            authorFirstName: 'Alex',
            authorLastName: 'Preda',
            authorId: 12345,
            createdAt: new Date()
          }).then(() => {
            dispatch({ type: 'CREATE_ARTICLE_SUCCESS' });
          }).catch(err => {
            dispatch({ type: 'CREATE_ARTICLE_ERROR' }, err);
          });
        }
        
};