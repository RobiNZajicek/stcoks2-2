import { CiUser } from "react-icons/ci";
import './Profilos.css'
const Profilos = () => {
  return (
    <div className='p '>
      <div className='p-left'>
        <CiUser size={40} />
      </div>
        <div className='p-rigth'>
            <span className='text-1'>Name from data</span> 
            <span className='text-2' >email from data</span>
        </div>
    </div>
  )
}

export default Profilos