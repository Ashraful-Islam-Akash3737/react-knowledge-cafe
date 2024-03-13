// import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <div className="border-2 rounded-lg border-solid border-[#6047EC] bg-[#efedfd] mb-6 px-2 md:px-6 py-5 mx-auto">
                <h3 className='text-[20px] text-center font-bold text-[#6047EC]'>Spent time on read: {readingTime} min</h3>
            </div>
            {/* ----------------- */}
            <div className="bg-[#f3f3f3]   p-8 rounded-lg">
                <h4 className="text-3xl font-bold text-[#111111] mb-4">Bookmarked Blogs: {bookmarks.length}</h4>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number,
}

export default Bookmarks;