import React from 'react'

import LoginBox from '../view/LoginBox'

const Login = () => {
  return (
    <div className=' w-screen h-screen'>
        <div className=' w-full h-full grid '>
            <div className=" w-full h-full lg:w-1/4 lg:h-3/5 m-auto border bg-slate-800">
<LoginBox/>
            </div>
        </div>
    </div>
  )
}

export default Login