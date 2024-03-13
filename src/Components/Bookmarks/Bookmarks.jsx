// import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-[#f3f3f3] p-8 rounded-lg">
            <h4 className="text-3xl font-bold text-[#111111] mb-4">Bookmarked Blogs: {bookmarks.length}</h4>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks;