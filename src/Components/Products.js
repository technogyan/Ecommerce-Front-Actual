import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { add } from '../Redux/CartSlice';
import { useDispatch, useSelector } from "react-redux";


const Products = () => {
  const swiperRef = useRef(null);

  const dispatch=useDispatch();

  useEffect(() => {
    products();
    category();
    // Initialize Swiper instance after data is loaded
    if (categdata.length > 0 && !swiperRef.current) {
      swiperRef.current = new Swiper('.swiper-container', {
        // Your Swiper settings here
        slidesPerView: 8,
        spaceBetween:90,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }, [])

  const [prductdata, setdata] = useState([]);
  const [categdata, setcategdata] = useState([]);

  const products = async () => {
    try {

      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      setdata(response.data)


    } catch (error) {
      console.log(error)
    }
  }
  const category = async () => {
    try {

      const catgresponse = await axios.get('https://api.escuelajs.co/api/v1/categories');
      setcategdata(catgresponse.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // Effect function
  }, [categdata]);
  useEffect(() => {
    // Effect function
  }, [prductdata]);

  const handleadd=(product)=>{
    dispatch(add(product))
  }
  console.log(categdata)
 
 
 
  return (
    <>
      {/* <!--start page content--> */}
      <div class="page-content">

        {/* <!--start carousel--> */}
        <section class="slider-section">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active bg-primary">
                <div class="row d-flex align-items-center">
                  <div class="col d-none d-lg-flex justify-content-center">
                    <div class="">
                      <h3 class="h3 fw-light text-white fw-bold">New Arrival</h3>
                      <h1 class="h1 text-white fw-bold">Women Fashion</h1>
                      <p class="text-white fw-bold"><i>Last call for upto 25%</i></p>
                      <div class=""><a class="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <img src="assets/images/sliders/s_1.webp" class="img-fluid" alt="..." />
                  </div>
                </div>
              </div>
              <div class="carousel-item bg-red">
                <div class="row d-flex align-items-center">
                  <div class="col d-none d-lg-flex justify-content-center">
                    <div class="">
                      <h3 class="h3 fw-light text-white fw-bold">Latest Trending</h3>
                      <h1 class="h1 text-white fw-bold">Fashion Wear</h1>
                      <p class="text-white fw-bold"><i>Last call for upto 35%</i></p>
                      <div class=""> <a class="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <img src="assets/images/sliders/s_2.webp" class="img-fluid" alt="..." />
                  </div>
                </div>
              </div>
              <div class="carousel-item bg-purple">
                <div class="row d-flex align-items-center">
                  <div class="col d-none d-lg-flex justify-content-center">
                    <div class="">
                      <h3 class="h3 fw-light text-white fw-bold">New Trending</h3>
                      <h1 class="h1 text-white fw-bold">Kids Fashion</h1>
                      <p class="text-white fw-bold"><i>Last call for upto 15%</i></p>
                      <div class=""><a class="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <img src="assets/images/sliders/s_3.webp" class="img-fluid" alt="..." />
                  </div>
                </div>
              </div>
              <div class="carousel-item bg-yellow">
                <div class="row d-flex align-items-center">
                  <div class="col d-none d-lg-flex justify-content-center">
                    <div class="">
                      <h3 class="h3 fw-light text-dark fw-bold">Latest Trending</h3>
                      <h1 class="h1 text-dark fw-bold">Electronics Items</h1>
                      <p class="text-dark fw-bold"><i>Last call for upto 45%</i></p>
                      <div class=""><a class="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <img src="assets/images/sliders/s_4.webp" class="img-fluid" alt="..." />
                  </div>
                </div>
              </div>
              <div class="carousel-item bg-green">
                <div class="row d-flex align-items-center">
                  <div class="col d-none d-lg-flex justify-content-center">
                    <div class="">
                      <h3 class="h3 fw-light text-white fw-bold">Super Deals</h3>
                      <h1 class="h1 text-white fw-bold">Home Furniture</h1>
                      <p class="text-white fw-bold"><i>Last call for upto 24%</i></p>
                      <div class=""><a class="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <img src="assets/images/sliders/s_5.webp" class="img-fluid" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        {/* <!--end carousel--> */}


        {/* <!--start Featured Products slider--> */}
        <section class="section-padding">
          <div class="container">
            <div class="text-center pb-3">
              <h3 class="mb-0 h3 fw-bold">Featured Products</h3>
              <p class="mb-0 text-capitalize">The purpose of lorem ipsum</p>
            </div>
            <div class="product-thumbs">
              {
                prductdata.map(item => (

                   <div key={item.id} class="card">
                    <div class="position-relative overflow-hidden">
                      <div
                        class="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <NavLink><i class="bi bi-heart"></i></NavLink>
                        <NavLink onClick={()=>handleadd(item)}><i class="bi bi-basket3"></i> </NavLink> 
                        <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i
                          class="bi bi-zoom-in"></i></a>
                      </div>
                      <Link  to={`/singleproduct/${item.id}`}>
                        <img src={item.category.image} class="card-img-top" alt="..." />
                        </Link> 
                    </div>
                    <div class="card-body">
                      <div class="product-info text-center">
                        <h6 class="mb-1 fw-bold product-name">{item.category.name}</h6>
                        <div class="ratings mb-1 h6">
                          <i class="bi bi-star-fill text-warning"></i>
                          <i class="bi bi-star-fill text-warning"></i>
                          <i class="bi bi-star-fill text-warning"></i>
                          <i class="bi bi-star-fill text-warning"></i>
                          <i class="bi bi-star-fill text-warning"></i>
                        </div>
                        <p class="mb-0 h6 fw-bold product-price">Rs {item.price}</p>
                      </div>
                    </div>
                  </div>
                 

                ))


              }

            </div>
          </div>
        </section>

        {/* <!--end Featured Products slider--> */}




        {/* <!--start features--> */}
        <section class="product-thumb-slider section-padding">
          <div class="container">
            <div class="text-center pb-3">
              <h3 class="mb-0 h3 fw-bold">What We Offer!</h3>
              <p class="mb-0 text-capitalize">The purpose of lorem ipsum</p>
            </div>
            <div class="row row-cols-1 row-cols-lg-4 g-4">
              <div class="col d-flex">
                <div class="card depth border-0 rounded-0 border-bottom border-primary border-3 w-100">
                  <div class="card-body text-center">
                    <div class="h1 fw-bold my-2 text-primary">
                      <i class="bi bi-truck"></i>
                    </div>
                    <h5 class="fw-bold">Free Delivery</h5>
                    <p class="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                  </div>
                </div>
              </div>
              <div class="col d-flex">
                <div class="card depth border-0 rounded-0 border-bottom border-danger border-3 w-100">
                  <div class="card-body text-center">
                    <div class="h1 fw-bold my-2 text-danger">
                      <i class="bi bi-credit-card"></i>
                    </div>
                    <h5 class="fw-bold">Secure Payment</h5>
                    <p class="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                  </div>
                </div>
              </div>
              <div class="col d-flex">
                <div class="card depth border-0 rounded-0 border-bottom border-success border-3 w-100">
                  <div class="card-body text-center">
                    <div class="h1 fw-bold my-2 text-success">
                      <i class="bi bi-minecart-loaded"></i>
                    </div>
                    <h5 class="fw-bold">Free Returns</h5>
                    <p class="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                  </div>
                </div>
              </div>
              <div class="col d-flex">
                <div class="card depth border-0 rounded-0 border-bottom border-warning border-3 w-100">
                  <div class="card-body text-center">
                    <div class="h1 fw-bold my-2 text-warning">
                      <i class="bi bi-headset"></i>
                    </div>
                    <h5 class="fw-bold">24/7 Support</h5>
                    <p class="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end row--> */}
          </div>
        </section>
        {/* <!--end features--> */}


        {/* <!--start special product--> */}
        <section class="section-padding bg-section-2">
          <div class="container">
            <div class="card border-0 rounded-0 p-3 depth">
              <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 text-center">
                  <img src="assets/images/extra-images/promo-large.webp" class="img-fluid rounded-0" alt="..." />
                </div>
                <div class="col-lg-6">
                  <div class="card-body">
                    <h3 class="fw-bold">New Features of Trending Products</h3>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item bg-transparent px-0">Contrary to popular belief, Lorem Ipsum is not simply
                        random text.</li>
                      <li class="list-group-item bg-transparent px-0">All the Lorem Ipsum generators on the Internet tend.
                      </li>
                      <li class="list-group-item bg-transparent px-0">There are many variations of passages of Lorem Ipsum
                        available.</li>
                      <li class="list-group-item bg-transparent px-0">There are many variations of passages
                        available.</li>
                    </ul>
                    <div class="buttons mt-4 d-flex flex-column flex-lg-row gap-3">
                      <a href="javascript:;" class="btn btn-lg btn-dark btn-ecomm px-5 py-3">Buy Now</a>
                      <a href="javascript:;" class="btn btn-lg btn-outline-dark btn-ecomm px-5 py-3">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--start special product--> */}


        {/* <!--start Brands--> */}
        <section class="section-padding">
          <div class="container">
            <div class="text-center pb-3">
              <h3 class="mb-0 h3 fw-bold">Shop By Brands</h3>
              <p class="mb-0 text-capitalize">Select your favorite brands and purchase</p>
            </div>
            <div class="brands">
              <div class="row row-cols-2 row-cols-lg-5 g-4">
                <div class="col">
                  <div class="p-3 border rounded brand-box">
                    <div class="d-flex align-items-center">
                      <a href="javascript:;">
                        <img src="assets/images/brands/01.webp" class="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 border rounded brand-box">
                    <div class="d-flex align-items-center">
                      <a href="javascript:;">
                        <img src="assets/images/brands/02.webp" class="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 border rounded brand-box">
                    <div class="d-flex align-items-center">
                      <a href="javascript:;">
                        <img src="assets/images/brands/03.webp" class="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 border rounded brand-box">
                    <div class="d-flex align-items-center">
                      <a href="javascript:;">
                        <img src="assets/images/brands/04.webp" class="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 border rounded brand-box">
                    <div class="d-flex align-items-center">
                      <a href="javascript:;">
                        <img src="assets/images/brands/05.webp" class="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 border rounded brand-box">
                    <div class="d-flex align-items-center">
                      <a href="javascript:;">
                        <img src="assets/images/brands/06.webp" class="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 border rounded brand-box">
                    <div class="d-flex align-items-center">
                      <a href="javascript:;">
                        <img src="assets/images/brands/07.webp" class="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 border rounded brand-box">
                    <div class="d-flex align-items-center">
                      <a href="javascript:;">
                        <img src="assets/images/brands/08.webp" class="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 border rounded brand-box">
                    <div class="d-flex align-items-center">
                      <a href="javascript:;">
                        <img src="assets/images/brands/09.webp" class="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="p-3 border rounded brand-box">
                    <div class="d-flex align-items-center">
                      <a href="javascript:;">
                        <img src="assets/images/brands/10.webp" class="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--end row--> */}
            </div>
          </div>
        </section>
        {/* <!--end Brands--> */}


        {/* <!--start cartegory slider--> */}
        <section class="cartegory-slider section-padding bg-section-2">
          <div class="container">
            <div class="text-center pb-3">
              <h3 class="mb-0 h3 fw-bold">Top Categories</h3>
              <p class="mb-0 text-capitalize">Select your favorite categories and purchase</p>
            </div>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {categdata.map((item, index) => (
                  <div key={index} className="swiper-slide">
                    {/* Your slide content here */}
                    <NavLink to=''>
                      <div className="card">
                        <div className="card-body">
                          <div className="overflow-hidden">
                            <img src={item.image} className="card-img-top rounded-0" alt="..." />
                          </div>
                          <div className="text-center">
                            <h5 className="mb-1 cartegory-name mt-3 fw-bold">{item.name}</h5>
                          </div>
                        </div>
                      </div>
                      </NavLink>
                  </div>
                ))}
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </section>
        {/* <!--end cartegory slider--> */}


        {/* <!--subscribe banner--> */}
        <section class="product-thumb-slider subscribe-banner p-5">
          <div class="row">
            <div class="col-12 col-lg-6 mx-auto">
              <div class="text-center">
                <h3 class="mb-0 fw-bold text-white">Get Latest Update by <br /> Subscribe Our Newslater</h3>
                <div class="mt-3">
                  <input type="text" class="form-control form-control-lg bubscribe-control rounded-0 px-5 py-3"
                    placeholder="Enter your email" />
                </div>
                <div class="mt-3 d-grid">
                  <button type="button" class="btn btn-lg btn-ecomm bubscribe-button px-5 py-3">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--subscribe banner--> */}


        {/* <!--start blog--> */}
        <section class="section-padding">
          <div class="container">
            <div class="text-center pb-3">
              <h3 class="mb-0 fw-bold">Latest Blog</h3>
              <p class="mb-0 text-capitalize">Check our latest news</p>
            </div>
            <div class="blog-cards">
              <div class="row row-cols-1 row-cols-lg-3 g-4">
                <div class="col">
                  <div class="card">
                    <img src="assets/images/blog/01.webp" class="card-img-top rounded-0" alt="..." />
                    <div class="card-body">
                      <div class="d-flex align-items-center gap-4">
                        <div class="posted-by">
                          <p class="mb-0"><i class="bi bi-person me-2"></i>Virendra</p>
                        </div>
                        <div class="posted-date">
                          <p class="mb-0"><i class="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                        </div>
                      </div>
                      <h5 class="card-title fw-bold mt-3">Blog title here</h5>
                      <p class="mb-0">Some quick example text to build on the card title and make.</p>
                      <a href="blog-read.html" class="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src="assets/images/blog/02.webp" class="card-img-top rounded-0" alt="..." />
                    <div class="card-body">
                      <div class="d-flex align-items-center gap-4">
                        <div class="posted-by">
                          <p class="mb-0"><i class="bi bi-person me-2"></i>Virendra</p>
                        </div>
                        <div class="posted-date">
                          <p class="mb-0"><i class="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                        </div>
                      </div>
                      <h5 class="card-title fw-bold mt-3">Blog title here</h5>
                      <p class="mb-0">Some quick example text to build on the card title and make.</p>
                      <a href="blog-read.html" class="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src="assets/images/blog/03.webp" class="card-img-top rounded-0" alt="..." />
                    <div class="card-body">
                      <div class="d-flex align-items-center gap-4">
                        <div class="posted-by">
                          <p class="mb-0"><i class="bi bi-person me-2"></i>Virendra</p>
                        </div>
                        <div class="posted-date">
                          <p class="mb-0"><i class="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                        </div>
                      </div>
                      <h5 class="card-title fw-bold mt-3">Blog title here</h5>
                      <p class="mb-0">Some quick example text to build on the card title and make.</p>
                      <a href="blog-read.html" class="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                    </div>
                  </div>
                </div>

              </div>
              {/* <!--end row--> */}
            </div>
          </div>
        </section>
        {/* <!--end blog--> */}


      </div>
      {/* <!--end page content--> */}
    </>
  )
}

export default Products
