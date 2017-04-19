var React = require("react");

module.exports =React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var text = this.refs.txtText.value;

    if(text) {
      this.refs.txtText.value = "";
      this.props.onNewTodo(text);
    }
      this.refs.txtText.focus();

  },
  render: function () {
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
  }
});
