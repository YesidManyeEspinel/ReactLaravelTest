import React from 'react';

const TableList = ({ lists, isloaded, onChange, handleSelect }) => {

  if (isloaded) {
    return <h2 className="text-center">Loading...</h2>;
  }
return(
<table className="table table-striped ">
  <thead className="thead-dark text-uppercase">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Nickname</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Age</th>
      <th scope="col">State (
        <select onChange={handleSelect} className='bg-dark text-white'>
          <option >Filter</option>
          <option value='all'>All</option>
          <option value='on'>On</option>
          <option value='off'>Off</option>
        </select>)
      </th>
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
        <td className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className={list.state === 'on' ? 'btn btn-outline-success active' : 'btn btn-outline-success'}>
          <input
            type="radio"
            name="state"
            value={list.id}
            onClick={onChange}
          />
          On
          </label>
          <label className={list.state === 'off' ? 'btn btn-outline-danger active' : 'btn btn-outline-danger'}>
          <input
            type="radio"
            name="state"
            value={list.id}
            onClick={onChange}
          />
            Off
          </label>
        </td>
      </tr>
      ))
    }
  </tbody>
</table>
)
};

export default TableList