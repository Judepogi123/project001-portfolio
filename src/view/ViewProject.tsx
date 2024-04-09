import React from 'react'

import { ProjectDataProps } from '../interface/data'

const ViewProject = ({id}: ProjectDataProps) => {
  return (
    <div className=' w-full h-full '>{id}</div>
  )
}

export default ViewProject