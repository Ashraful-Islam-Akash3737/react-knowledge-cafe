// import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    return (
        <div>
            <h3>Title: {blog.title}</h3>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;