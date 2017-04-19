var React = require("react")
var {connect} = require('react-redux');
const actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var text = this.refs.txtText.value;
    var {dispatch}= this.props;
    if (text) {
      this.refs.txtText.value = "";
      dispatch(actions.addTodo(text));
    }
    this.refs.txtText.focus();

  },
  render: function() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <div>
            <input type="text" ref="txtText" placeholder="What will you do next?"/>
            <button className="button expanded">Add Todo</button>
          </div>
        </form>
      </div>
    );
  },
});

export default connect()(AddTodo);
