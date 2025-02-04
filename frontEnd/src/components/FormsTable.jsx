import React, { useState, useEffect } from "react";
import { Button, Table, Container } from "react-bootstrap";

function FormsTable({ tableData }) {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    if (tableData) {
      setForms(tableData);
    }
  }, [tableData]);

  return (
    <table className="table table table-striped table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {forms.map((form) => (
          <tr key={form._id}>
            <td>{form.title}</td>
            <td>{form.createdAt}</td>
            <td className="d-flex justify-content-center">
              <Button variant="primary" className="mx-2">
                Open
              </Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FormsTable;
