import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component{
  renderList(){
    return this.props.books.map((book) =>{
      return(
        <li key={book.title} className="list-group-item">{book.title}</li>
        );
    });
  }

  render(){
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

export default connect(mapStateToProps)(BookList);
// takes function and component and makes it a container
