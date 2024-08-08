// JS 代码，一般用单引号， JSX 的属性则是用双引号。
function Avatar({ size }) {
  const avatar = 'https://cdn.pixabay.com/photo/2023/05/09/01/47/gold-7980065_640.jpg';
  const descripiton = 'box';
  const name = '这是一个大宝箱';

  return(
    <>
      <h1>{name}</h1>
      <img 
        className = "avatar"
        src = {avatar}
        alt = {descripiton}
        width = {size}
      />
    </>
  )
}

export default Avatar