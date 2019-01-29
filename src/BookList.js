import React, { Component } from 'react';

class BookList extends Component {

  componentDidMount() {
    console.log(this.props.books)
  }

  new() {
      var author = document.getElementById("newAuthor").value;
      var title = document.getElementById("newTitle").value;
      this.props.addBook(author, title)
      console.log(this.props.books)
  }

  borrow(e, item) {
    console.log(item);
    this.props.borrowBook(item);

    e.preventDefault();
  }


  render() {
        const listItems = this.props.books.map((d) => <li onClick={(e) => this.borrow(e, d)} key={d.id}>{d.author} {d.title} {d.taken}</li>)
        return (
          <div>
          {listItems}
            <input id="newAuthor"/>
            <input id="newTitle"/>
            <button onClick={this.new.bind(this)} type="submit" id="add">add</button>
          </div>
        );
  }
}

export default BookList;
