import axios from "axios"
import { useNavigate } from "react-router-dom"

const UserLogout = () => {
  const navigate = useNavigate()

  axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`, {}, { withCredentials: true })
    .then(() => {
      navigate('/user-login')
    })
    .catch(err => console.error(err))

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout