function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /* ------- IMPORTS -------- */
import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class ToDo extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "deleteItem",









    id => {
      return () => {
        const newState = this.state.todos.map((todo, i) => {
          if (todo.id === id) {
            this.state.todos.splice(i, 1);
          }
          return todo;
        });
      };
    });_defineProperty(this, "handleClick",
    id => {
      return () => {
        const newState = this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.done = !todo.done;
          }

          return todo;
        });
        this.setState({ todos: newState });
      };
    });_defineProperty(this, "onSubmit",












    event => {
      event.preventDefault();
      let todoItemValue = this.todoItemValue.current.value;
      if (todoItemValue.length !== 0) {
        let id = todoItemValue + new Date().getTime();
        let todoItem = {
          id: id,
          todoItem: todoItemValue,
          done: false,
          date: this.dateChecker() };


        let newArray = this.state.todos;
        const newState = () => {
          return newArray.push(todoItem);
        };
        newState();
        this.setState({ todos: newArray });
        this.todoItemValue.current.value = '';
      }
    });this.todoItemValue = React.createRef();this.state = { todos: [{ id: 1, todoItem: "Write friday update", done: false, date: 'Oct 5' }, { id: 2, todoItem: "Do english homework", done: false, date: 'Oct 6' }, { id: 3, todoItem: "Create React To Do App", done: true, date: 'Nov 27' }] };}dateChecker() {const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];var dateObj = new Date();var month = monthNames[dateObj.getUTCMonth()]; //months from 1-12
    var day = dateObj.getUTCDate();let newdate = month + " " + day;return newdate;}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "todo-app" }, /*#__PURE__*/
      React.createElement("div", { className: "todo-head" }, /*#__PURE__*/
      React.createElement("h1", null, this.props.title)), /*#__PURE__*/

      React.createElement("form", { onSubmit: this.onSubmit, className: "todo-create" }, /*#__PURE__*/
      React.createElement("input", { type: "text", ref: this.todoItemValue, placeholder: "Create To Do" }), /*#__PURE__*/
      React.createElement("button", { type: "submit" }, "Create")),

      this.state.todos.length !== 0 ? /*#__PURE__*/React.createElement("p", { className: "current-todo" }, this.state.todos.length, " To Do in total") : /*#__PURE__*/React.createElement("p", { className: "current-todo" }, "To Do list is empty"), /*#__PURE__*/
      React.createElement("ul", { className: "todo-list" },

      this.state.todos.length !== 0 ?
      this.state.todos.map(item => {
        {
          return item.done ? /*#__PURE__*/
          React.createElement("li", { onClick: this.handleClick(item.id), key: item.id, className: "done" }, /*#__PURE__*/
          React.createElement("div", { className: "todo-item-wr" }, /*#__PURE__*/
          React.createElement("div", { className: "todo-item-text" }, /*#__PURE__*/
          React.createElement("span", null, "\u2714\uFE0F"),
          item.todoItem), /*#__PURE__*/

          React.createElement("span", null, item.date)), /*#__PURE__*/


          React.createElement("div", { className: "right-div" }, /*#__PURE__*/
          React.createElement("button", { onClick: this.deleteItem(item.id), className: "removeTodo" }, " ", /*#__PURE__*/React.createElement("span", null, "\u2716\uFE0F"), " "))) : /*#__PURE__*/


          React.createElement("li", { onClick: this.handleClick(item.id), key: item.id }, /*#__PURE__*/
          React.createElement("div", { className: "todo-item-wr" }, /*#__PURE__*/
          React.createElement("div", { className: "todo-item-text" },
          item.todoItem), /*#__PURE__*/

          React.createElement("span", null, item.date)), /*#__PURE__*/

          React.createElement("div", { className: "right-div" }, /*#__PURE__*/
          React.createElement("button", { onClick: this.deleteItem(item.id), className: "removeTodo" }, " ", /*#__PURE__*/React.createElement("span", null, "\u2716\uFE0F"), " ")));


        }
      }) : /*#__PURE__*/
      React.createElement("div", { className: "empty-todo-list" }, /*#__PURE__*/
      React.createElement("h3", null, "Your To Do list is empty")))));





  }}


/* ------- RENDERING -------- */
const rootEl = document.getElementById('app');

// root.render(<App title="Greate To Do App" />);
ReactDOM.render( /*#__PURE__*/React.createElement(ToDo, { title: "To Do List" }), rootEl);
/* ------- END RENDERING -------- */