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

    borrow(item) {
    	var index = this.props.books.indexOf(item)
    	console.log(item)
    	this.props.borrowBook(item)
    	
    }


	render() {
        const listItems = this.props.books.map((d) => <li onClick={this.borrow.bind(this,d.id)} key={d.id}>{d.author} {d.title} {d.taken}</li>)
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