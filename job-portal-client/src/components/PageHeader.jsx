import React from 'react'

const PageHeader = ({title,path}) => {
  return (
    <div className='py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center'>
      <div>
        <h2 className='text-3xl text-center text-blue font-medium mb-1'>{title}</h2>
        <p className='text-center text-sm'><a href="/">Home</a>/ {path}</p>
      </div>
    </div>
  )
}

export default PageHeader
