let nextBookId = 2
export function addBook(author, title) {
  return {
    type: 'ADD_BOOK',
    id: nextBookId++,
    author,
    title
  }
}

export function borrowBook(id) {
  return {
    type: 'BORROW_BOOK',
    id: id,
  }
}
