// import React from 'react';
import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    const {id,title, cover, author_img, author,posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='rounded-lg mb-8 w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-6 md:gap-0">
                <div className="flex  justify-between items-center">
                    <img src={author_img} alt="Author Image" className="w-14" />
                    <div className="ml-6">
                        <h3 className="text-[#111] font-bold md:text-2xl text-xl">{author}</h3>
                        <p className="text-sm font-semibold text-[#707070]">{posted_date}</p>
                    </div>
                </div>
                <div className="text-xl font-medium text-[#707070] flex items-center">
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmarks(blog)} className='ml-2 text-2xl text-red-600'><BsBookmarks /></button>
                </div>
            </div>
            <h3 className='md:text-4xl text-2xl font-bold text-[#111] mb-4'>{title}</h3>
            <p>
            {
                hashtags.map((hash, idx)=> <span key={idx} className='mr-4 font-medium text-xl text-[#707070]'><a href="">#{hash}</a></span> )
            }
            </p>
            <button onClick={()=>handleMarkAsRead(id, reading_time)} className='mt-5 text-[#6047EC] underline font-semibold text-xl'>mark as read</button>
            
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;