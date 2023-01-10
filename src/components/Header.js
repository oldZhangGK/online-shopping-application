// rafce react arrow function component export
// py means padding from top and bottom
// px means padding from left and right
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div class="container-xxl">
          <div class="row">
            <div class="col-6">
              <p className='text-white'>
                Save up to 20% on selected item.
              </p>
            </div>
            <div class="col-6">
              <p class="text-white">
                Have a problem? call us <a href='tel:+ 1 1234567890'> (+1)123-456-7890 </a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
