var React = require("react");

var {connect} = require('react-redux');
const actions = require('actions');

export var Search = React.createClass({
  render: function() {
    var {searchText, showCompleted, dispatch} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="text" ref="txtSearch" placeholder="Search list" value={searchText} onChange={()=>{
            dispatch(actions.setSearchText(this.refs.txtSearch.value));
          }}></input>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="chkShowCompleted" checked={showCompleted} onChange={()=>{
              dispatch(actions.toggleShowCompleted());
            }}></input>
            Show completed items
          </label>
        </div>
      </div>
    );
  },
});

export default connect((state) => {
  return {
    searchText: state.searchText,
    showCompleted: state.showCompleted
  };
})(Search);
