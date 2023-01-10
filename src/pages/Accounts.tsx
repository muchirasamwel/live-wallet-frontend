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
        initial={{ opacity: 0, borderRadius: '50%', rotate: 10, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          borderRadius: '20px',
          scaleX: 1,
          rotate: 0,
          transition: { duration: 1, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'white',
          boxShadow: '2px 4px 8px grey',
          marginLeft: '20px',
          marginRight: '20px',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, borderRadius: '50%', rotate: 10, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          borderRadius: '20px',
          scaleX: 1,
          rotate: 0,
          transition: { duration: 1, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'white',
          boxShadow: '2px 4px 8px grey',
          marginLeft: '20px',
          marginRight: '20px',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, borderRadius: '50%', rotate: 10, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          borderRadius: '20px',
          scaleX: 1,
          rotate: 0,
          transition: { duration: 1, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'white',
          boxShadow: '2px 4px 8px grey',
          marginLeft: '20px',
          marginRight: '20px',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, borderRadius: '50%', rotate: 10, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          borderRadius: '20px',
          scaleX: 1,
          rotate: 0,
          transition: { duration: 1, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'white',
          boxShadow: '2px 4px 8px grey',
          marginLeft: '20px',
          marginRight: '20px',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, borderRadius: '50%', rotate: 10, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          borderRadius: '20px',
          scaleX: 1,
          rotate: 0,
          transition: { duration: 1, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'white',
          boxShadow: '2px 4px 8px grey',
          marginLeft: '20px',
          marginRight: '20px',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, borderRadius: '50%', rotate: 10, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          borderRadius: '20px',
          scaleX: 1,
          rotate: 0,
          transition: { duration: 1, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'white',
          boxShadow: '2px 4px 8px grey',
          marginLeft: '20px',
          marginRight: '20px',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, borderRadius: '50%', rotate: 10, scaleX: 0 }}
        whileInView={{
          opacity: 1,
          borderRadius: '20px',
          scaleX: 1,
          rotate: 0,
          transition: { duration: 1, repeat: 0 }
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          background: 'white',
          boxShadow: '2px 4px 8px grey',
          marginLeft: '20px',
          marginRight: '20px',
          marginTop: '30px'
        }}
      >
        <div>Accounts:{params?.id}</div>
      </motion.div>
    </motion.div>
  )
}

export default Accounts
