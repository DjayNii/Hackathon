import React from 'react'
import FormsTable from './FormsTable'

function HomePage() {
  const myData = { data:
    [
      {
        id:1,
        title: "My Name is king. Lol lol lol",
        createdAt: "12:06",
      },
      {
          id:2,
        title: "My Name is king. Lol lol lol",
        createdAt: "12:06",
      }
    ]
  }
  return (
    <div className='container'>
      <h2 className='text-center'>Your Forms</h2>
      <button type="button" className="btn btn-primary" style={{marginBottom:10}}>New</button>
      <FormsTable tableData = {myData}></FormsTable>
    </div>
  )
}

export default HomePage