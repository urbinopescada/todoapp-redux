var React = require("react");

module.exports = React.createClass({
  handleSearch: function (){
      var showCompleted = this.refs.chkShowCompleted.checked;
      var searchText = this.refs.txtSearch.value;
      this.props.onSearch(showCompleted,searchText);
  },
  render: function () {
    return (
      <div className="container__header">
        <div>
          <input type="text" ref="txtSearch" placeholder="Search list" onChange={this.handleSearch}></input>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="chkShowCompleted" onChange={this.handleSearch}></input>
            Show completed items
          </label>
        </div>
      </div>
    );
  }
});
