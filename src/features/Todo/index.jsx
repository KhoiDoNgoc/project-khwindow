import React from 'react';
//import PropTypes from 'prop-types';
import TotoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Do Ngoc Khoi'
        },
        {
            id: 2,
            title: '40 tuổi'
        },
        {
            id: 3,
            title: 'Coder HTML/CSS'
        },
        {
            id: 4,
            title: 'khoidng13@gmail.com'
        }
    ];
    return (
        <div>
            <h5>Todo List New</h5>
            <TotoList todoListArr={todoList} />
        </div>
    );
}

export default TodoFeature;