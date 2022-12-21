import { DynamicObject } from '../types/objects'

const base = process.env.REACT_APP_BASE_URL

export const useGetAccounts = async ({ params }: { params?: Object }) => {
  //   const { params } = payload
  if (params) console.log({ params })
  try {
    console.log(base + '/api/accounts......')
    let res = await fetch(base + '/api/accounts')
    const resp: Array<any> = await res.json()
    console.log('resss', res)
    return { accounts: resp }
  } catch (e) {
    return { accounts: [] }
  }
}
