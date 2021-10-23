// 1. 导包
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 创建元素
const title = React.createElement('h1', null, 'Hello React')

// 3. 渲染元素
ReactDOM.render(title, document.getElementById('root'))
