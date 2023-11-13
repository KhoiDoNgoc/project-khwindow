import React from 'react';
import PropTypes from 'prop-types';


TotoList.propTypes = {
    todoListArr: PropTypes.array,
};


TotoList.defaultProps = {
    todoListArr: [],
};


function TotoList({ todoListArr }) {
    return (
        <ul>
            {todoListArr.map(todoInfor => (
                <li key={todoInfor.id}>{todoInfor.title}</li>
            ))}
        </ul>
    );
}

export default TotoList;