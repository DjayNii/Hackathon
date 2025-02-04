import React, { useState } from 'react';
import { Button, Table, Container } from 'react-bootstrap';

function FormsTable() {
  const [forms, setForms] = useState([
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
  ]);

  return (
    
      <table className='table table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            forms.map(form => 
              <tr key={form.id}>
                <td>{form.title}</td>
                <td>{form.createdAt}</td>
                <td className="d-flex justify-content-center">
                    <Button variant="primary" className="mx-2">Open</Button>
                    <Button variant="danger">Delete</Button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
  );
}

export default FormsTable;