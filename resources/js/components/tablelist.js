import React from 'react';

const TableList = ({lists}) => (
<table className="table table-striped">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Nickname</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    {
    lists.map((list)=>(
      <tr key={list.id}>
        <th scope="row">{list.id}</th>
        <td>{list.name}</td>
        <td>{list.nickname}</td>
        <td>{list.email}</td>
        <td>{list.phone}</td>
        <td>{list.age}</td>
      </tr>
      ))
    }
  </tbody>
</table>
);

export default TableList