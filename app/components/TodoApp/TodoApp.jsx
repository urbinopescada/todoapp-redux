var React = require("react");
var uuid = require("node-uuid");
var moment = require("moment");

var Search = require("Search");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoAPI = require("TodoAPI");

module.exports = React.createClass({
  getInitialState: function (){
      return {
        showCompleted: false,
        searchText: "",
        todos: TodoAPI.getTodos()
        /*todos: [
          {id: uuid(), completed:false, text:'walk the dog'},
          {id: uuid(), completed:false, text:'clean the garage'},
          {id: uuid(), completed:true,  text:'Wash the car'},
          {id: uuid(), completed:false, text:'Prep my speach'}
        ]*/
      };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleNewTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          completed:false,
          text: text,
          createdAt: moment().unix()
        }
      ]
    });
  },

  handleSearch: function (showCompleted,searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText,
    });
  },

  handleToggle: function (id) {
    this.setState((prevState) => {

      var ret = prevState.todos.map((todo)=>{
            if(todo.id===id) {
              todo.completed = !todo.completed;
              todo.completedAt = todo.completed ? moment().unix(): null;
            }
            return todo;
          });

      return { todos: ret };
    });
  },
  render: function() {
    var {todos,showCompleted,searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-4">
            <div className="container">
              <Search onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} showCompleted={showCompleted} searchText={searchText} onToggle={this.handleToggle} />
              <AddTodo onNewTodo={this.handleNewTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
