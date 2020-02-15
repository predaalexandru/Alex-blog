const initState = {

  articles: [
    {id: '1', title: 'Juventus face scor', content: 'blah blah blah'},
    {id: '2', title: 'Bayern castiga Liga Campionilor', content: 'blah blah blah'},
    {id: '3', title: 'CFR Cluj o bate pe Liverpool cu 3-0', content: 'blah blah blah'}
  ]
}

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