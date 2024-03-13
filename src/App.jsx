
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog => {
    // console.log('bookmarks adding soon', blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    // console.log('mark as read', readingTime);
    // remove the read blog from bookmarks  
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <main className="md:flex items-start justify-between p-4 mx-auto max-w-7xl md:gap-6">
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>



        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      

    </main >
    </>
  )
}



// App.propTypes = {
//   bookmarks: PropTypes.array.isRequired
// }
export default App
