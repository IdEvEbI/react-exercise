import React from 'react'
import ReactDOM from 'react-dom'

// 1. 创建元素
const nav = React.createElement('ul', { className: 'nav' }, [
  React.createElement('li', null, '手机'),
  React.createElement('li', null, '笔记本'),
  React.createElement('li', null, '电视'),
])

// 2. 渲染元素
ReactDOM.render(nav, document.getElementById('root'))
