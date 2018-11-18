import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({ pages }) => (
  <nav className="navigation">
    <ul className="navigation-list">
      {pages.map(({ title, url }) => (
        <li className="navigation-list-item" key={title}>
          <NavLink to={url} className="navigation-list-item__link">{title}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
)
export default Navigation
