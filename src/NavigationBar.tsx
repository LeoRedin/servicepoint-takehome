import React from 'react'
import burger from './assets/burger.svg'
import './NavigationBar.css'

/*
 Design a React component in TypeScript that creates a responsive navigation bar. \
 The navigation bar should have a logo aligned to the left, menu items in the center,
 and a profile section aligned to the right.
 The menu should collapse into a hamburger menu on smaller screens using Flexbox.
 Demonstrate how you would structure the component and manage the state for the toggle of the hamburger menu.
*/

interface NavigationProps {
  logo: string // URL to the logo to be displayed
  menuItems: string[] // list of menu items to render
  profile: {name: string; avatarUrl: string} // currently logged in user
}

export const NavigationBar: React.FC<NavigationProps> = ({
  logo,
  menuItems,
  profile,
}) => {
  const [showNavbar, setShowNavbar] = React.useState(false)

  const toggleNavbar = () => setShowNavbar(!showNavbar)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu-icon" onClick={toggleNavbar}>
          <img src={burger} alt="burger icon" />
        </div>

        <div className={`menu-items ${showNavbar && 'active'}`}>
          <ul>
            {menuItems.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="profile">
          <img src={profile.avatarUrl} alt="avatar" />
          <div className="user">
            <span>{profile.name}</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
