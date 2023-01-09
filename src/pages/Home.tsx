import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SimpleTable from '../components/tables/SimpleTable'
import io from 'socket.io-client'
import { motion } from 'framer-motion'
const base = process.env.REACT_APP_BASE_URL

type Props = {}

const socket = io('http://localhost:80')
const channel = 'accounts_updated'

const Home = (props: Props) => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [accounts, setAccounts] = useState(Array<Object>)
  const [columns, setColumns] = useState(Array<String>)
  const getAccounts = () => {
    console.log(base + '/api/accounts......')
    fetch(base + '/api/accounts')
      .then(res => res.json())
      .then(res => {
        console.log('resss', res)
        setAccounts(res)
      })
  }

  useEffect(() => {
    socket.removeAllListeners()
    socket.on('connect', () => {
      console.log('payload', socket)
      setIsConnected(true)
    })

    socket.on(channel, payload => {
      console.log('socket says..', { payload })
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    setColumns(['name', 'occupation', 'phone', 'email'])
    getAccounts()

    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  }, [])

  return (
    <motion.div layout>
      <Grid container justifyContent={'center'} alignItems='center'>
        <Grid md={8} sx={{}}>
          <Typography>Home</Typography>
          <SimpleTable rows={accounts} cols={columns} />
        </Grid>
      </Grid>
    </motion.div>
  )
}
export default Home
