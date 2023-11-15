import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    albumInfor: PropTypes.object.isRequired,
};

function Album({ albumInfor }) {
    return (
        <div>
            <div>
                <img src={albumInfor.urlAlum} alt={albumInfor.nameAlum} />
            </div>
            <p>{albumInfor.nameAlum}</p>
        </div>
    );
}

export default Album;