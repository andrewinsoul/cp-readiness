import React from 'react';

class TodoList extends React.Component {

    render() {
        return (
            <div>
                <h1>My Todos</h1>
              <ul>
                {this.props.items.map((item, index) => <li key={index}> {item} </li>)}
              </ul>
            </div>
        )
    }
}

export default TodoList;
