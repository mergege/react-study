import React, { Component } from 'react'
import styles from './index.module.scss'

const menuList = [
  { title: '首页', link: '/home' },
  { title: '购物车', link: '/cart' },
  { title: '个人中心', link: '/myHome' },
  { title: '在线商城', link: '/onlineBuy' }
]

export default class BottomNav extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h3>This is BottomNav</h3>
        {menuList.map((item, index) => {
          console.log(item)
          // return <div>{item.title}</div>
          return <MenuItem key={item.link} {...item} />
        })}
      </div>
    )
  }
}

function MenuItem({ title, link }) {
  console.log(title)
  return (
    <div className={styles.main}>
      <span>{title}</span>
      <span>{link}</span>
    </div>
  )
}
