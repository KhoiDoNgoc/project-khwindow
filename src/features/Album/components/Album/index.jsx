import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    AlbumInfor: PropTypes.array.isRequired,
};

function Album({ AlbumInfor }) {
    return (
        <div>
            <div>
                <img src={AlbumInfor.urlAlum} alt={AlbumInfor.nameAlum} />
            </div>
            <p>{AlbumInfor.nameAlum}</p>
        </div>
    );
}

export default Album;