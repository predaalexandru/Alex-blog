const initState = {}

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE_SUCCESS':
      console.log('Created article success');
      return state;
    case 'CREATE_ARTICLE_ERROR':
      console.log('Created article error');
      return state;
    default:
      return state;
  }
};

export default articleReducer