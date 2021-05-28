import { Link } from 'gatsby'
import React from "react"
import styled from 'styled-components'
import {menuData} from '../data/dataMenu'


const Header = () => {

  return (
    <Nav>
      <NavLink to="/">Cyberbrief</NavLink>
      
      <NavMenu>
        {menuData.map((item, index)=>(
          <NavLink to={item.link} key={index}>
            {item.title}

          </NavLink>
        ))}
      </NavMenu>
      
    </Nav>

  )
}

export default Header



const Nav = styled.nav`
  background: transparent;
  border-bottom: 1px solid black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #241C52;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.1rem;
  height: 100%;
  cursor: pointer;
  margin: 0 15px;
  &:hover {
    font-weight: bold;
  }

`


const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 48px;
  
`


