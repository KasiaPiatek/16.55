import React from 'react';
import style from './TodoForm.css'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
}

updateTodo(e) {
  e.preventDefault();
  this.setState({
    text: e.target.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  this.props.add(this.state.text);
  this.setState ({
    text: ''
  });
}


render() {
    return(
        <form onSubmit={this.handleSubmit} className={style.TodoForm}>
            <input
                type="text"
                placeholder="Task"
                value={this.state.text}
                onChange={this.updateTodo} />
            <button
              type="submit"
              disabled={!this.state.text}>Add Todo
            </button>
        </form>
    );
  }
}

export default TodoForm;