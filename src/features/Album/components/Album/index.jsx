import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
    albumInfor: PropTypes.object.isRequired,
};

function Album({ albumInfor }) {
    return (
        <div className='album'>
            <div className='album-url'>
                <img src={albumInfor.urlAlum} alt={albumInfor.nameAlum} />
            </div>
            <p className='album-name'>{albumInfor.nameAlum}</p>
        </div>
    );
}

export default Album;