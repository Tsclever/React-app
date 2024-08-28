import Button from "../Button";

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`)  // 如果需要在字符串中加入变量, 则需要使用反引号(`)
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  )
}

export default PlayButton