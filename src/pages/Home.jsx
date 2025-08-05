import React, { Fragment } from 'react'
import { useCollection } from '../hooks/useCollection'
import { retry } from '@reduxjs/toolkit/query'

const Home = () => {
  let {data: users} = useCollection("users")

  if(!users){
    return <h1>Loading...</h1>
  }
  return (
    <div >
      {
        users && users.map((user) => {
          console.log(user);
          return(
            <Fragment key={user.id}>
              <div className="avatar avatar-online flex items-center gap-5 p-5 bg-gray-100 w-[30%] max-lg:w-[50%] max-md:w-[60%] max-sm:w-full max-sm:mx-auto rounded-2xl m-2">
                <div className="w-[20%] rounded-full relative">
                  <img className='rounded-full' src={user.photoURL} />
                  <span className={`absolute w-5 max-md:w-4 aspect-square rounded-full ${ user.online ? " bg-green-500" : "bg-gray-500"} top-1 right-1`}></span>
                </div>
                <div>
                  <h2 className='text-2xl max-lg:text-xl max-sm:text-lg font-bold'>{user.displayName}</h2>
                  <h3 className='text-lg max-lg:text-sm'>{user.email}</h3>
                </div>
              </div>
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default Home