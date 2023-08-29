import React from "react";

function List({ collabs }) {

    return (
        <>
            <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Position</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {collabs.map((collaborator) => (
        <tr key={collaborator.name}>
            <th scope={collaborator.name}>{collaborator.name}</th>
            <td>{collaborator.email}</td>
            <td>{collaborator.age}</td>
            <td>{collaborator.position}</td>
            <td>{collaborator.phone}</td>
        </tr>
    ))}
  </tbody>
</table>
            </div>
        </>
    )
};
export default List;