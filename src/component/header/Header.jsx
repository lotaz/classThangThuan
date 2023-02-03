import React, { Component } from 'react'
import './Header.scss'
export default class aaaa
 extends Component {
  render() {
    return (
      <div className='header'>
        <img src="https://vtcoder-html3.surge.sh/img/logo.png" alt="" className='header-img'/>
        <div className='header-list'>
            <p>HOME</p>
            <p>INTRODUCTION</p>
            <p>FEATURES</p>
            <p>TEAM</p>
            <p>NEWS</p>
            <p>EVENTS</p>
            <p>BLOGS</p>
        </div>
        <div className='header-login'>
            <button>REGISTER</button>
            <button>LOGIN</button>
        </div>
      </div>
    )
  }
}
