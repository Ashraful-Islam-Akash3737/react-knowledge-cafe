
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main className="md:flex items-start justify-between p-4 mx-auto max-w-7xl">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
