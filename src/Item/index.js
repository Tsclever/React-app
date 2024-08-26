function Item({name, isPacked = false }) {  
  if (isPacked) {
    return null;  
  }
  return <li className="item"> {name}</li>;

  // return (
  //   <li className="item">
  //     { name + (isPacked ? ' ✔' : '') }
  //   </li>
  // )

}

export default Item