var $ = require("jquery");

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)){
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  },

  getTodos: function() {
    var strTodos = localStorage.getItem("todos");
    var todos = []
    try {
      todos = JSON.parse(strTodos)
    } catch (e) {
      console.log("JSON.parse failed for localStorage:todos", strTodos, e)
    }
    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    filteredTodos = filteredTodos.filter( (todo) => {
        var ret = true; // boolean that incates if item is returned or not

        //Filter by showCompleted
        ret = ret && (!todo.completed || showCompleted);

        // filter by text
        if (searchText){
          ret = ret && todo.text.toLowerCase().indexOf(searchText.toLowerCase())>=0;
        }

        return ret;
    });


    // Sort with non-completed first
    filteredTodos.sort((a,b)=>{
      var ret =0; //-1-> a<b ;0-> a=b; 1-> a>b
      if (!a.completed && b.completed) {ret =-1;}
      if (a.completed && !b.completed) {ret = 1;}
      if (ret===0) {
        // sort by text (not user friendly)
        //if (a.text.toLowerCase() < b.text.toLowerCase()) {ret =-1;}
        //if (a.text.toLowerCase() > b.text.toLowerCase()) {ret = 1;}

      }
      return ret;
    });

    return filteredTodos;
  }
};
