import { people } from './data'
import { getImageUrl } from './utils'

function List() {
  // 使用filter()方法, 过滤数组数据
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );

  // 使用map()方法, 渲染页面
  const listItems = chemists.map(person =>
    <li>
      <img 
        src = {getImageUrl(person)}
        alt = {person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        know for {person.accomplishment}
      </p>
    </li>
  );

  // console.log(listItems);

  return <ul>{listItems}</ul>;
}

export default List;