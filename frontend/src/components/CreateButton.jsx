import React from 'react'
import { Link } from 'react-router-dom'

const CreateButton = () => {
  return (
    <div className='lk'>
        <Link to="/create" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Create Blog</Link>
    </div>
  )
}

export default CreateButton;