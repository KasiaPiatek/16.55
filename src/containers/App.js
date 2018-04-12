import style from './App.css';
import React from 'react';
import uuid from 'uuid';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js'
import TodoForm from '../components/TodoForm';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                    id: 1,
                        text: 'clean room'
                    }, {
                    id: 2,
                        text: 'wash the dishes'
                    }, {
                    id: 3,
                        text: 'feed my cat'
                    }]
        };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    }

    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
}
    render() {
    return (
        <div className={style.TodoApp}>
            <Title title={'title'}
             length={this.state.data.length}
            />
            <TodoList 
                list={this.state.data}
                remove={this.removeTodo}
            />

        </div>

    );
}
}

export default App;

