import React from 'react'
import FormsTable from './FormsTable'

function HomePage() {
  return (
    <div className='container'>
      <h2 className='text-center'>Your Forms</h2>
      <button type="button" className="btn btn-primary" style={{marginBottom:10}}>New</button>
      <FormsTable></FormsTable>
    </div>
  )
}

export default HomePage