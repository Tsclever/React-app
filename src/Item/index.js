function Item({name, isPacked = false }) {
  return (
    <li className="item">
      { name + (isPacked ? ' ✔' : '') }
    </li>
  )
}

export default Item