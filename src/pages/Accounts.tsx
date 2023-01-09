import { Grid } from '@mui/material'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const Accounts = (props: Props) => {
  const params = useParams()
  return (
    <motion.div
      layout
      drag='x'
      style={{ height: '95vh', overflowY: 'scroll' }}
      // animate={{ scale: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
          transition: { duration: 0.8, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'red',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
          transition: { duration: 0.8, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'red',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
          transition: { duration: 0.8, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'red',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
          transition: { duration: 0.8, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'red',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
          transition: { duration: 0.8, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'red',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
          transition: { duration: 0.8, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'red',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
          transition: { duration: 0.8, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'red',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
    </motion.div>
  )
}

export default Accounts
