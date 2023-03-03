import React, { Component } from 'react'
// import logo192 from './image/logo192.png'

export class TopNavigation extends Component {
  render() {
    const myStyle = {
      display: 'flex',
      color: "white",
      backgroundColor: "#cb202d",
      padding: "10px",
      fontFamily: "Sans-Serif",

    }

    return (

      <nav>
        <div className='navLogo' style={myStyle}>
          <div>
      
            <h2 style={{ color: 'white' }}>Zomato</h2>

            </div>
          <div class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-dark" type="submit">Search</button>
              </form>

            </div>

          </div>
          

        </div>

      </nav>
    )
  }
}

export default TopNavigation