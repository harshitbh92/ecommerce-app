import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import img1 from '../images/compare.png'
import img2 from '../images/heart.png'
import img3 from '../images/user.png'
import img4 from '../images/shopping-cart.png'
import img5 from '../images/dots-menu.png'

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-2'> {/*py-3 means padding on y-axis top and bottom */}
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'> {/*mb-0 --> means margin bottom */}
                Free Shipping Over $100 and Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0' >
                Contact : <a className='text-white' href="tel : +91 8267962851">+91 82679-62851</a>
              </p>
            </div>

          </div>
        </div>

      </header>
      <header className='header-upper py-1'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link to='/' className='text-white'>Digitic</Link>
              </h2>
            </div>
            <div className='col-5 py-3'>
              <div className="input-group ">
                <input type="text" className="form-control py-2" placeholder="Search Product Here " aria-label="Search Product Here"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2"><BsSearch className='fs-6' />{/* fs --> font size  p-3 --> paddind from all -3 */}
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link 
                  to='/compare-product'
                  className='d-flex align-items-center text-white gap-10'>
                    <img src={img1} alt='compare products' style={{ filter: 'brightness(0) invert(1)' }} />
                    <p className='mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link 
                  to='/wishlist'
                  className='d-flex align-items-center text-white gap-10'>
                    <img src={img2} alt='wishlist' style={{ filter: 'brightness(0) invert(1)' }} />
                    <p className='mb-0'>Add to  <br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link
                  to='/login'
                   className='d-flex align-items-center text-white gap-10'>
                    <img src={img3} alt='log in' style={{ filter: 'brightness(0) invert(1)' }} />
                    <p className='mb-0'>Log in <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link
                  to='/cart'
                   className='d-flex align-items-center text-white gap-10'>
                    <img src={img4} alt='cart' style={{ filter: 'brightness(0) invert(1)' }} />
                    <p className='mb-0'>$400</p>
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>

      </header>
      <header className='header-lower py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div className=''>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={img5} alt='menu'  style={{ filter: 'brightness(0) invert(1)' }}/>
                     <span >Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
