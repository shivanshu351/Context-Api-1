import Login from '../components/Login'
import Profile from '../components/Profile'
import UserContextProvider from '../context/UserContextProvider'
// import './App.css'
import './index.css'

function App() {


  return (
    <>
      <UserContextProvider>
          <Login/>
          <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
