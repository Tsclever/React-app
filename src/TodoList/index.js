function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long'}
  ).format(date);
}

function TodoList() {
  const today = new Date();

  return (
    <div>
      <h1>Skiing makes me happy</h1>
      <img 
      src="https://hellorfimg.zcool.cn/preview260/50563417.jpg?x-image-process=image/format,webp" 
      alt="滑雪" 
      className="photo"
      />
      <h1>今天是 {formatDate(today)}</h1>
      <ul>
        <li>Let's go skiing</li>
        <li>Go, go, go, go</li>
        <li>hapy hapy hapy</li>
      </ul>
    </div>
  )
}

export default TodoList

// 使用 `<div> ... </div>` 的形式有一个缺点，就是最终展示在用户面请的页面就多了这么一层  `<div>` 嵌套。
// 如果我不想向 DOM 添加额外的节点或者层次的话，应该怎么做呢？ React 提供的解决方案被称为Fragments （直译为碎片）
/* 
  <React.Fragment>
    <h1>Hedy Lamarr's Todos</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
    />
    <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
    </ul>
</React.Fragment> 
*/

// 其实还有更进一步的方法，Fragment 还支持短语法，这个一看就会，直接看代码：
// 短语法唯一的缺点==是不支持 key
/* 
  <>
    <h1>Hedy Lamarr's Todos</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
    >
    <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
    </ul>
  </>
*/