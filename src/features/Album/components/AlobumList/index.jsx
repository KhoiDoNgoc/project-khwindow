import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';


AlbumList.propTypes = {
    AlbumListAr: PropTypes.array.isRequired,
};

function AlbumList({ AlbumListAr }) {
    return (
        <ul>
            {AlbumListAr.map(albumlistAr => (
                <li key={albumlistAr.id}>
                    {/*GET Data to Album*/}
                    <Album AlbumInfor={AlbumListAr} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;