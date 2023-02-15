import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'


function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [isOpen, setIsOpen] = useState(false) //modal


  const getAllUsers = () => {
    const url = 'https://users-crud.academlo.tech/users/'
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const url = 'https://users-crud.academlo.tech/users/'
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleUserById = id => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.put(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUpdateInfo()
      })
      .catch(err => console.log(err))
  }

  const handleOpen = () => setIsOpen(true) //modal

  const handleClose = ()  => setIsOpen(false) //modal


  return (
    <div className="App">

      <div className='app__header'>
        <h1 className='app__title'>Users</h1>
        <button onClick={handleOpen} className='app__btn' >New User</button> {/* modal */}
      </div>

      <div className={`app__form ${isOpen && 'app__form-visible'}`}> {/* modal */}
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          handleClose={handleClose} // modal
          setUpdateInfo={setUpdateInfo} // de la X
        />
      </div>

      <div className='app__card'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleUserById={deleUserById}
              setUpdateInfo={setUpdateInfo}
              handleOpen={handleOpen} //modal
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
