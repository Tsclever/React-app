import { people } from './data'
import { getImageUrl } from './utils'

function List() {
  // 使用filter()方法, 过滤数组数据
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );

  // 使用map()方法, 渲染页面
  const listItems = chemists.map(person =>
    <li key={person.id}>
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

// 如果没有 <li> 作为根元素包裹所有的内容时需要怎么做呢?
// 用  <div>  会污染 DOM，可以用 <> </> 来把多个页面元素包装成单个根元素
// const listItems = people.map(person =>
//   <>
//     <h1>{person.name}</h1>
//     <p>{person.bio}</p>
//   </>
// );

// 此时 <> </> 这种简写的形式是无法直接加 key 的，只要先加上 Fragment 的引用：
// import { Fragment } from 'react';

// const listItems = people.map(person =>
//   <Fragment key={person.id}>
//     <h1>{person.name}</h1>
//     <p>{person.bio}</p>
//   </Fragment>
// );