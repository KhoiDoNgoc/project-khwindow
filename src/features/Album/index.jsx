import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlobumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {

    const AlbumFeatureList = [
        {
            id: 1,
            nameAlum: 'Một Mình Vẫn Vui',
            urlAlum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/c/6/7/5c6724fdcb79c120c1199f24f53c3b0d.jpg'
        },
        {
            id: 2,
            nameAlum: 'Nghe là yêu',
            urlAlum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/0/0/e/000e02623da2905645f36df8eb2c4d74.jpg'
        },
        {
            id: 3,
            nameAlum: 'Nhạc chữa buồn',
            urlAlum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/5/3/2/1532372f1e3baacca5f7a3d9cee03563.jpg'
        },
        {
            id: 4,
            nameAlum: 'Hồi ức kẹo ngọt',
            urlAlum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/e/1/c/8e1c286a0626d6d240e641baccb6ab7c.jpg'
        },
        {
            id: 5,
            nameAlum: 'Những bài hát hay nhất của Taylor Swift ',
            urlAlum: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/6/e/e/76eeb09d669cbf1b54a29e0fb56b4e88.jpg'
        }
    ];

    return (
        <div>
            <h2>Bài hát thế hệ 8x 9x đời đầu</h2>
            <AlbumList AlbumListAr={AlbumFeatureList} />
        </div>
    );
}

export default AlbumFeature;