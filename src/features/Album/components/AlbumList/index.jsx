import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';

AlbumList.propTypes = {
    albumListAr: PropTypes.array.isRequired,
};

function AlbumList({ albumListAr }) {
    return (
        <ul className="album-list">
            {albumListAr.map(albumListArMap => (
                <li key={albumListArMap.id}>
                    {/*GET Data to Album*/}
                    <Album albumInfor={albumListArMap} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;