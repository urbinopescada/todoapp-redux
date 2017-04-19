var React = require("react");
var {connect} = require('react-redux');
import Todo from "Todo";

export var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = ()=> {
      if (!todos || todos.length===0){
        return (
            <p className="container__message">No data found</p>
        );
      }
      else {
        return todos.map((todo)=>{
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
    return {
        todos: state.todos
    };
  }
)(TodoList);
