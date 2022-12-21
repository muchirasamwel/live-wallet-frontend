import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const Accounts = (props: Props) => {
  const params = useParams()
  return <div>Accounts:{params?.id}</div>
}

export default Accounts
