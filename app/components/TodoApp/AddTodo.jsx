import * as React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    var text = this.refs.txtText.value;
    var {dispatch}= this.props;
    if (text) {
      this.refs.txtText.value = "";
      dispatch(actions.startAddTodo(text));
    }
    this.refs.txtText.focus();
  }
  render () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <div>
            <input type="text" ref="txtText" placeholder="What will you do next?"/>
            <button className="button expanded">Add Todo</button>
          </div>
        </form>
      </div>
    )
  }
};

export default Redux.connect()(AddTodo);
