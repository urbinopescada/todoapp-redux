import * as React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class Search extends React.Component {
  render () {
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
  }
}

export default Redux.connect((state) => {
  return {
    searchText: state.searchText,
    showCompleted: state.showCompleted
  };
})(Search);
