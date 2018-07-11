import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component{
  renderList(){
    return this.props.books.map((book) =>{
      return(
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
        );
    });
  }

  render(){
    return(
    <ul className="list-group col-sm-4">
    {this.renderList()}
    </ul>
  )
  }
}

function mapStateToProps(state){
  //whatever is returned will show up as props
  // inside booklist
  return{
    books: state.books
    //
  };
}
//anything reutrned from this fucntion will end up as props on
//the booklist container
function mapDispatchToProps(dispatch){
  //whenever selectbook is called the result should be passed
  //to all of the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}
// promote booklist from componenet to container
//it needs to know about dispatch method as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// takes function and component and makes it a container
