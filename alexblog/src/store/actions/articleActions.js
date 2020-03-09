export const createArticle = (article) => {
    // dispatch - dispatches an action to a reducers
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        //we grab the profile information and ID from firebase using getState()
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('articles').add({
            ...article,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
          }).then(() => {
            dispatch({ type: 'CREATE_ARTICLE_SUCCESS' });
          }).catch(err => {
            dispatch({ type: 'CREATE_ARTICLE_ERROR' }, err);
          });
        }
        
};