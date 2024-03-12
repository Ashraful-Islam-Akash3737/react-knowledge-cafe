
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main className="flex items-center justify-between p-4">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
