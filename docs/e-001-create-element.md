# 练习 001：创建元素

## 一. 准备工作

1. 新建项目

   ```bash
   npx create-react-app e-001-create-element
   ```

2. 调整目录结构

   ```txt
   .
   ├── README.md
   ├── package.json
   ├── public
   │   └── index.html
   ├── src
   │   └── index.js
   └── yarn.lock
   ```

## 二. 使用 createElement 创建元素

### 练习 1：创建一个元素

#### A. 目标：创建一个元素

使用 `React.createElement`，在页面中创建以下结构：

```html
<h1>Hello React</h>
```

#### B. API 说明

```js
// 创建元素
React.createElement('标签名', {标签属性: 标签属性值, ...} | null, '标签文本' | 其他元素 | 元素数组)

// 渲染元素
ReactDOM.render(元素, document.getElementById('root'))
```

#### C. 步骤：创建一个元素

1. 清空 `index.js` 重新编写代码，导入 `react` 和 `react-dom`

   ```js
   // 1. 导包
   import React from 'react'
   import ReactDOM from 'react-dom'
   ```

2. 创建元素

   ```js
   // 2. 创建元素
   const title = React.createElement('h1', null, 'Hello React')
   ```

3. 渲染元素

   ```js
   // 3. 渲染元素
   ReactDOM.render(title, document.getElementById('root'))
   ```

4. 运行 `yarn start` 验证效果

### 练习 2：创建嵌套元素

#### A. 目标：创建嵌套元素

使用 `React.createElement`，在页面中创建以下结构：

```html
<ul class="nav">
  <li>手机</li>
  <li>笔记本</li>
  <li>电视</li>
</ul>
```

#### B. 步骤：创建嵌套元素

1. 导包（略）

2. 创建元素

   ```js
   // 1. 创建元素
   const nav = React.createElement('ul', { className: 'nav' }, [
     React.createElement('li', null, '手机'),
     React.createElement('li', null, '笔记本'),
     React.createElement('li', null, '电视'),
   ])
   ```

3. 渲染元素（略）

> 注意：`li` 标签还需要使用 `createElement` 创建，如果使用 `<li>手机</li>` 只会生成对应的文本，而不会创建新的元素。
