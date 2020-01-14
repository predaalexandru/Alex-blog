const initState = {

  articles: [
    {id: '1', title: 'Juventus face scor', content: 'blah blah blah'},
    {id: '2', title: 'Bayern castiga Liga Campionilor', content: 'blah blah blah'},
    {id: '3', title: 'CFR Cluj o bate pe Liverpool cu 3-0', content: 'blah blah blah'}
  ]
}

const articleReducer = (state = initState, action) => {
  return state
};

export default articleReducer