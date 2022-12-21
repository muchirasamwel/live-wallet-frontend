import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import {
  Link,
  Outlet,
  useLoaderData,
  Location,
  useLocation
} from 'react-router-dom'
import User from '../assets/user.png'
type LoaderData = {
  accounts: Array<object>
}

export default function Root () {
  const { accounts } = useLoaderData() as LoaderData
  const location = useLocation()
  const [active, setActive] = useState('')
  useEffect(() => {
    // console.log(location.pathname)
    setActive(location.pathname)
  }, [location.pathname])

  return (
    <>
      <div id='sidebar'>
        <h1>Main Layout</h1>
        {/* <div>
          <form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q'
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <form method='post'>
            <button type='submit'>New</button>
          </form>
        </div> */}
        <Grid sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <img src={User} width='100px' height={'100px'} />
        </Grid>
        <nav>
          <ul>
            <li className={active == '/account/1' ? 'active' : ''}>
              <Link to={`account/1`}>Account</Link>
            </li>
            <li className={active == '/account/2' ? 'active' : ''}>
              <Link to={`account/2`}>Account 2</Link>
            </li>
            <li className={active == '/accounts' ? 'active' : ''}>
              <Link to={`accounts`}>Accounts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}
