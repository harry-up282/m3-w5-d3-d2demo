import React from "react";

function Lists(props){
  let listrows = [];
  props.alldata.forEach(element => {
    listrows.push(
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>{element.author}</td>
      </tr>
    )
  })
  return(
    <table>
      <thead>
        <tr>
        <th>#</th>
        <th>id</th>
        <th>title</th>
        <th>author</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>{listrows}</tbody>
      </table>
  )
}
export default Lists;