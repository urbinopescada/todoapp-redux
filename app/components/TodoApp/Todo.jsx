import * as React from 'react';
import * as Redux from 'react-redux';
import * as moment from 'moment';

import * as actions from 'actions';

export class Todo extends React.Component {
  render () {
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
}
export default Redux.connect()(Todo);
