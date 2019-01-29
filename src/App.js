import { connect } from "react-redux";
import BookList from './BookList';
import { addBook, borrowBook } from './actions'
import './App.css';


function mapStateToProps(state) {
	return { 
		books: state.books, title: state.title
	}
}

const mapDispatchToProps = { addBook, borrowBook };

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
