var React = require("react");
var {connect} = require('react-redux');
import Todo from "Todo";
import TodoAPI from "TodoAPI";

export var TodoList = React.createClass({
  render: function() {
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
});

export default connect(
  (state)=>{
    return  state;
  }
)(TodoList);
