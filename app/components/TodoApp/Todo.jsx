var React = require("react");
var {connect} = require('react-redux');
var moment = require("moment");

const actions = require('actions');

export var Todo = React.createClass({
  render: function() {
    var {id, text, completed,createdAt,completedAt, dispatch} = this.props;
    var todoClassName = completed? "todo todo-completed": "todo"
    var renderDate= () => {
        if (completed){
          return "Completed " + moment.unix(completedAt).format("MMM Do, YYYY @ h:mm a")
        }
        else {
          return "Created " + moment.unix(createdAt).format("MMM Do, YYYY @ h:mm a")
        }
    };

    return (
      <div className={todoClassName} onClick={()=>{
          //this.props.onToggle( id );
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type="checkbox" ref="chk" checked={completed}></input>
        </div>
        <div>
          <p> {text} </p>
          <p className="todo__subtext"> { renderDate() } </p>
        </div>
      </div>
    );
  }
});
export default  connect()(Todo);
