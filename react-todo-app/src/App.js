import React from 'react';
import TodoList from './Component/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      term: '',
      items: [],
      todoErrors: {}
    };
  }

  onChange(evt) {
    this.setState({term: evt.target.value});
  }

  validate(todo) {
    const errors = {};
    const todoList = this.state.items; 
    const entry = this.state.term;
    if(!todo.term) errors.empty = 'please enter todo';
    todoList.forEach(todo => {
      if(todo === entry) {
        errors.duplicate = 'identical todo cannot be added';
        this.setState({term: ''});
        return;
      }
    })
    return errors;
  }

  onSubmit(evt) {
    const todos = this.state;
    const todoErrors = this.validate(todos);
    this.setState({todoErrors});
    evt.preventDefault();
    if(Object.keys(todoErrors).length) {
      return;
    }
    this.setState({term: '', items: [...this.state.items, this.state.term]});
  }

  render() {
    return (
      <div className='main'>
        <form className='App' name='app' onSubmit={this.onSubmit}>
          <input
            className = 'entry'
            onChange={this.onChange}
            value={this.state.term}
            placeholder='Enter Todo'/>
            <br/>
          <span>{this.state.todoErrors.empty}</span>
          <span>{this.state.todoErrors.duplicate}</span>
          <br/>
          <input className='submit-btn' type='submit' value='Add Todo'/>
        </form>
        <hr/>
        <div className='todos'>
          <TodoList items={this.state.items}/>
        </div>
      </div>
    )
  }
}
 
export default App;
