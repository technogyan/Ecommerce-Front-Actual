import './App.css';
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Products from './Components/Products';
import SingleProduct from './Components/SingleProduct';
import { useEffect, useState } from 'react';
import Cart from './Components/Cart';
import { useSelector } from 'react-redux';


function App() {
  
  const cartitem = useSelector(state => state.cart.items);
 
 
  

  function Logout() {
    localStorage.clear();
    window.location.href('/')
  }


  const user = localStorage.getItem('user')
  return (
    <Router>
      <div className="App">
        <Routes>

          {/* Routes */}
          <Route path='/' Component={Products} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={SignUp} />
          <Route path='/singleproduct/:id' Component={SingleProduct} />
          <Route path='/cart/' Component={Cart} />

          {/* Routes */}
        </Routes>


        {/* <!--page loader--> */}
        <div class="loader-wrapper">
          <div class="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
            <div class="spinner-border text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        {/* <!--end loader--> */}


        {/* <!--start top header--> */}
        <header class="top-header">
          <nav class="navbar navbar-expand-xl w-100 navbar-dark container gap-3">
            <a class="navbar-brand d-none d-xl-inline" href="index-2.html"><img src="assets/images/logo.webp" class="logo-img" alt="" /></a>
            <a class="mobile-menu-btn d-inline d-xl-none" href="javascript:;" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar">
              <i class="bi bi-list"></i>
            </a>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
              <div class="offcanvas-header">
                <div class="offcanvas-logo"><img src="assets/images/logo.webp" class="logo-img" alt="" />
                </div>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body primary-menu">
                <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                  <li class="nav-item my-auto">

                    <NavLink to='/' class="nav-link my-auto">Home</NavLink>
                  </li>
                  {/* <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="tv-shows.html" data-bs-toggle="dropdown">
                        Categories
                      </a>
                      <div class="dropdown-menu dropdown-large-menu">
                        <div class="row">
                          <div class="col-12 col-xl-4">
                            <h6 class="large-menu-title">Fashion</h6>
                            <ul class="list-unstyled">
                              <li><a href="javascript:;">Casual T-Shirts</a>
                              </li>
                              <li><a href="javascript:;">Formal Shirts</a>
                              </li>
                              <li><a href="javascript:;">Jackets</a>
                              </li>
                              <li><a href="javascript:;">Jeans</a>
                              </li>
                              <li><a href="javascript:;">Dresses</a>
                              </li>
                              <li><a href="javascript:;">Sneakers</a>
                              </li>
                              <li><a href="javascript:;">Belts</a>
                              </li>
                              <li><a href="javascript:;">Sports Shoes</a>
                              </li>
                            </ul>
                          </div>

                          <div class="col-12 col-xl-4">
                            <h6 class="large-menu-title">Electronics</h6>
                            <ul class="list-unstyled">
                              <li><a href="javascript:;">Mobiles</a>
                              </li>
                              <li><a href="javascript:;">Laptops</a>
                              </li>
                              <li><a href="javascript:;">Macbook</a>
                              </li>
                              <li><a href="javascript:;">Televisions</a>
                              </li>
                              <li><a href="javascript:;">Lighting</a>
                              </li>
                              <li><a href="javascript:;">Smart Watch</a>
                              </li>
                              <li><a href="javascript:;">Galaxy Phones</a>
                              </li>
                              <li><a href="javascript:;">PC Monitors</a>
                              </li>
                            </ul>
                          </div>

                          <div class="col-12 col-xl-4 d-none d-xl-block">
                            <div class="pramotion-banner1">
                              <img src="assets/images/menu-img.webp" class="img-fluid" alt="" />
                            </div>
                          </div>

                        </div>

                      </div>
                    </li> */}
                  {/* <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                        Shop
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="cart.html">Shop Cart</a></li>
                        <li><a class="dropdown-item" href="wishlist.html">Wishlist</a></li>
                        <li><a class="dropdown-item" href="product-details.html">Product Details</a></li>
                        <li><a class="dropdown-item" href="payment-method.html">Payment Method</a></li>
                        <li><a class="dropdown-item" href="billing-details.html">Billing Details</a></li>
                        <li><a class="dropdown-item" href="address.html">Addresses</a></li>
                        <li><a class="dropdown-item" href="shop-grid.html">Shop Grid</a></li>
                        <li><a class="dropdown-item" href="shop-grid-type-4.html">Shop Grid 4</a></li>
                        <li><a class="dropdown-item" href="shop-grid-type-5.html">Shop Grid 5</a></li>
                        <li><a class="dropdown-item" href="search.html">Search</a></li>
                      </ul>
                    </li> */}
                  <li class="nav-item">
                    <a class="nav-link" href="about-us.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact-us.html">Contact</a>
                  </li>
                  {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                      Account
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="account-dashboard.html">Dashboard</a></li>
                      <li><a class="dropdown-item" href="account-orders.html">My Orders</a></li>
                      <li><a class="dropdown-item" href="account-profile.html">My Profile</a></li>
                      <li><a class="dropdown-item" href="account-edit-profile.html">Edit Profile</a></li>
                      <li><a class="dropdown-item" href="account-saved-address.html">Addresses</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><NavLink class="dropdown-item" to='/login'>Login</NavLink></li>
                      <li><a class="dropdown-item" href="authentication-register.html">Register</a></li>
                      <li><a class="dropdown-item" href="authentication-reset-password.html">Password</a></li>
                    </ul>
                  </li> */}
                  {/* <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                        Blog
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li>
                        <li><a class="dropdown-item" href="blog-read.html">Blog Read</a></li>
                      </ul>
                    </li> */}

                  {
                    user ? <li class="nav-item my-auto me-3">
                      <a class="nav-link" onClick={Logout}>Logout</a>
                    </li>
                      :
                      <>
                        <li class="nav-item my-auto me-3">
                          <NavLink class="nav-link" to='/login'>Login</NavLink>
                        </li>

                        <li class="nav-item my-auto">
                          <NavLink class="nav-link" to='/register'>Signup</NavLink>
                        </li>
                      </>

                  }

                </ul>
              </div>
            </div>
            <ul class="navbar-nav secondary-menu flex-row">



              <li class="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <NavLink to='/cart' className="nav-link position-relative">
                  <div class="cart-badge">{cartitem.length}</div>
                  <i class="bi bi-basket2"></i>
                </NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="account-dashboard.html"><i class="bi bi-person-circle"></i></a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <!--end top header--> */}

        {/* <!--start page content--> */}
        <div class="page-content">



        </div>
        {/* <!--end page content--> */}


        {/* <!--start footer--> */}
        <section class="footer-section bg-section-2 section-padding">
          <div class="container">
            <div class="row row-cols-1 row-cols-lg-4 g-4">
              <div class="col">
                <div class="footer-widget-6">
                  <img src="assets/images/logo.webp" class="logo-img mb-3" alt="" />
                  <h5 class="mb-3 fw-bold">About Us</h5>
                  <p class="mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                  <a class="link-dark" href="javascript:;">Read More</a>
                </div>
              </div>
              <div class="col">
                <div class="footer-widget-7">
                  <h5 class="mb-3 fw-bold">Explore</h5>
                  <ul class="widget-link list-unstyled">
                    <li><a href="javascript:;">Fashion</a></li>
                    <li><a href="javascript:;">Women</a></li>
                    <li><a href="javascript:;">Furniture</a></li>
                    <li><a href="javascript:;">Shoes</a></li>
                    <li><a href="javascript:;">Topwear</a></li>
                    <li><a href="javascript:;">Brands</a></li>
                    <li><a href="javascript:;">Kids</a></li>
                  </ul>
                </div>
              </div>
              <div class="col">
                <div class="footer-widget-8">
                  <h5 class="mb-3 fw-bold">Company</h5>
                  <ul class="widget-link list-unstyled">
                    <li><a href="javascript:;">About Us</a></li>
                    <li><a href="javascript:;">Contact Us</a></li>
                    <li><a href="javascript:;">FAQ</a></li>
                    <li><a href="javascript:;">Privacy</a></li>
                    <li><a href="javascript:;">Terms</a></li>
                    <li><a href="javascript:;">Complaints</a></li>
                  </ul>
                </div>
              </div>
              <div class="col">
                <div class="footer-widget-9">
                  <h5 class="mb-3 fw-bold">Follow Us</h5>
                  <div class="social-link d-flex align-items-center gap-2">
                    <a href="javascript:;"><i class="bi bi-facebook"></i></a>
                    <a href="javascript:;"><i class="bi bi-twitter"></i></a>
                    <a href="javascript:;"><i class="bi bi-linkedin"></i></a>
                    <a href="javascript:;"><i class="bi bi-youtube"></i></a>
                    <a href="javascript:;"><i class="bi bi-instagram"></i></a>
                  </div>
                  <div class="mb-4 mt-4">
                    <h5 class="mb-0 fw-bold">Support</h5>
                    <p class="mb-0 text-muted">support@example.com</p>
                  </div>
                  <div class="">
                    <h5 class="mb-0 fw-bold">Toll Free</h5>
                    <p class="mb-0 text-muted">1800- 8xx 2xx</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-5"></div>
            <div class="row">
              <div class="col-12">
                <div class="text-center">
                  <h5 class="fw-bold mb-3">Download Mobile App</h5>
                </div>
                <div class="app-icon d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2">
                  <div>
                    <a href="javascript:;">
                      <img src="assets/images/play-store.webp" width="160" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="javascript:;">
                      <img src="assets/images/apple-store.webp" width="160" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* <!--end footer--> */}

        <footer class="footer-strip text-center py-3 bg-section-2 border-top positon-absolute bottom-0">
          <p class="mb-0 text-muted">© 2022. www.example.com | All rights reserved.</p>
        </footer>

      </div>

    </Router>
  );
}

export default App;
