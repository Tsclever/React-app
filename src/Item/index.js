function Item({name, isPacked = false }) {  
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✔'}
        </del>
      ) : (
        name
      )}
    </li>
  )

  // if (isPacked) {
  //   return null;  
  // }
  // return <li className="item"> {name}</li>;

  // return (
  //   <li className="item">
  //     { name + (isPacked ? ' ✔' : '') }
  //   </li>
  // )

}

export default Item