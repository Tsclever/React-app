// JS 代码，一般用单引号， JSX 的属性则是用双引号。
function Avatar({ size = 300, person }) {

  function getImageUrl(imageId){
    return(
      'https://cdn.pixabay.com/' +
      imageId +
      '.jpg'
    )
  }


  return(
    <img 
      className = "avatar"
      src = {getImageUrl(person.imageId)}
      alt = {person.name}
      width = {size}
    />
  )
}

export default Avatar