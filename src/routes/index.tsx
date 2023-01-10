import { Grid, Icon } from '@mui/material'
import { styled } from '@mui/system'
import { motion } from 'framer-motion'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import React, { useEffect, useState } from 'react'
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
interface Props {
  className: string
  children?: JSX.Element | JSX.Element[]
  nodata?: boolean
}

const menuMotion = {
  rest: {
    borderWidth: 0,
    borderColor: 'white',
    borderStyle: 'solid',
    transition: {
      duration: 2,
      type: 'tween',
      ease: 'easeIn'
    }
  },
  hover: {
    borderLeftWidth: 10,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut'
    }
  }
}

const iconMotion = {
  rest: { rotate: 0, color: 'black', duration: 0.2, type: 'tween' },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn'
    }
  },
  click: {
    rotate: 360,
    color: 'red',
    scale: 10,
    x: 300,
    transition: {
      duration: 0.1
    }
  }
}

// const list = { hidden: { opacity: 1 } }
// const item = { hidden: { x: 0, opacity: 1 } }

const StyledMoLi = styled(motion.li)({
  borderWidth: 0,
  borderColor: 'white',
  borderStyle: 'solid',
  background: 'red'
  // borderTopLeftRadius: '20px',
  // borderBottomLeftRadius: '20px',
})

const AnimLi = (props: Props) => (
  <StyledMoLi
    initial='rest'
    whileHover='hover'
    whileTap='click'
    animate='rest'
    {...props}
    variants={menuMotion}
    style={props.nodata ? { height: '20px' } : {}}
  >
    {/* <div className='sp1'></div> */}
    <Grid
      display={'flex'}
      flexDirection={'row'}
      alignItems='center'
      sx={{ width: '100%' }}
    >
      {!props.nodata && (
        <motion.div variants={iconMotion}>
          <AccountCircleIcon />
        </motion.div>
      )}
      <Grid style={{ width: '100%' }}>{props.children}</Grid>
    </Grid>
    {/* <div className='sp2'></div> */}
  </StyledMoLi>
)

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
          <motion.ul initial={false}>
            <AnimLi
              className={
                active == '/account/1'
                  ? 'active'
                  : active == '/account/2'
                  ? 'bottom_curved'
                  : ''
              }
            >
              <Link to={`account/1`}>Account</Link>
            </AnimLi>
            <AnimLi
              className={
                active == '/account/2'
                  ? 'active'
                  : active == '/account/1'
                  ? 'top_curved'
                  : active == '/accounts'
                  ? 'bottom_curved'
                  : ''
              }
            >
              <Link to={`account/2`}>Account 2</Link>
            </AnimLi>
            <AnimLi
              className={
                active == '/accounts'
                  ? 'active'
                  : active == '/account/2'
                  ? 'top_curved'
                  : ''
              }
            >
              <Link to={`accounts`}>Accounts</Link>
            </AnimLi>
            <AnimLi
              className={active == '/accounts' ? 'top_curved' : ''}
              nodata
            >
              {/* <Link to={`accounts`}>Accounts</Link> */}
            </AnimLi>
          </motion.ul>
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}
