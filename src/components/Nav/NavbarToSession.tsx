import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth'
import { AppDispatch } from '../../redux/store'

export default function NavbarToSession(): JSX.Element {
  const { name } = useSelector((state: any) => state.auth)
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () => {
      dispatch(logout())
      navigate('/')
  }


  return (
    <nav className='w-full font-medium p-5 '>
      <div className=' max-w-screen-xl flex mx-auto items-center'>
        <h3 className=' text-xl'><Link to={'/'}>Logo</Link></h3>
        <ul className=' flex gap-5 ml-auto'>
          <li><Link to={'/jobs'}>Jobs</Link></li>
          <li><Link to={'/dashboard'}>Dashboard</Link></li>
          <li>{name}</li>
          <li onClick={logOut} className='cursor-pointer'>Cerrar sessión</li>
        </ul>
      </div>
    </nav>
  )
}
