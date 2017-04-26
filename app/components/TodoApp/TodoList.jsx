
import * as React from 'react';
import * as Redux from 'react-redux';
import * as moment from 'moment';

import Todo from "Todo";
import TodoAPI from "TodoAPI";

export class TodoList extends React.Component{
  render () {
    var {todos, showCompleted,searchText} = this.props;
    var renderTodos = ()=> {
      var todosToRender = TodoAPI.filterTodos(todos,showCompleted,searchText);
      if ( todosToRender.length===0){
        return (
            <p className="container__message">No data found</p>
        );
      }
      else {
        return todosToRender.map((todo)=>{
            return (
              //we have to give a unique id to react in key
              <Todo key={todo.id} {...todo}/>
            );
        });
      }
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

export default Redux.connect(
  (state)=>{
    return  state;
  }
)(TodoList);
