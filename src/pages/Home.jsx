import React, { Fragment } from 'react'
import { useCollection } from '../hooks/useCollection'
import { retry } from '@reduxjs/toolkit/query'

const Home = () => {
  let {data: users} = useCollection("users")

  if(!users){
    return <h1>Loading...</h1>
  }
  return (
    <div>
      {
        users && users.map((user) => {
          return(
            <Fragment key={user.id}>
              {user.online && (
                <div className='avatar avatar-online'>
                  <div className='w-24 rounded-full'>
                    <img src={user.photoURL} alt="" />
                  </div>
                </div>
              )}
              {!user.online && (
                <div className='avatar avatar-offline'>
                  <div className='w-24 rounded-full'>
                    <img src={user.photoURL} alt="" />
                  </div>
                </div>
              )}
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default Home