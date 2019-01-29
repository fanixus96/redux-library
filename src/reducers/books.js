const books = (state = [{id:0, author: "author1", title:"title1", taken:null}, {id:1, author: "author2", title:"title2", taken:null}], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: action.id,
          author: action.author,
          title: action.title,
          taken: null
        }
      ]
    case 'BORROW_BOOK':
    return state.slice(action.id,1)

        default:
          return state;
  }
}

export default books;