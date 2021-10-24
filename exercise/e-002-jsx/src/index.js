import ReactDOM from 'react-dom'

const element = (
  <>
    <h1>JSX 注意事项</h1>
    <ul>
      <li>JSX 需要一个根节点</li>
    </ul>
    <hr></hr>
  </>
)

ReactDOM.render(element, document.getElementById('root'))
