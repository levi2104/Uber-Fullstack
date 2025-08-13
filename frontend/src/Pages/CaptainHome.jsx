import { useContext } from "react"
import { CaptainDataContext } from "../context/CaptainContext"

const CaptainHome = () => {
  const { captain } = useContext(CaptainDataContext)
  console.log(captain)

  return <div>firstname: {captain.fullname.firstname}</div>
}

export default CaptainHome