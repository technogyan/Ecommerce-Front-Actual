import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { addItem } from '../redux/CartSlice';


const SingleProduct = (props) => {

    const dispatch = useDispatch()
    const { id } = useParams();


    const [prductdata, setdata] = useState([]);

    useEffect(() => {
        products();

    }, [])
    const products = async () => {
        try {

            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
            const mydata = response.data

            setdata(mydata)

        } catch (error) {
            console.log(error)
        }
    }
   

    useEffect(() => {
        // Effect function
    }, [prductdata]);

 
    const handleadd = (product) => {
        dispatch(addItem({
            ...product,
            quantity: 1
        }))
    }


    

    return (
        <>


            <div>
                {/*<!--start page content-->*/}
                <div class="page-content">


                    {/*<!--start breadcrumb-->*/}
                    <div class="py-4 border-bottom">
                        <div class="container">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0">
                                    <li class="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                                    <li class="breadcrumb-item active" aria-current="page">Page Details</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/*<!--end breadcrumb-->*/}


                    {/*<!--start product details-->*/}
                    <section class="py-4">
                        <div class="container">
                            <div class="row g-4">
                                <div class="col-12 col-xl-7">
                                    <div class="product-images">
                                        <div class="product-zoom-images">
                                            <div class="row row-cols-2 g-3">
                                                <div class="col-12">
                                                    <div class="img-thumb-container overflow-hidden position-relative" data-fancybox="gallery" data-src="assets/images/product-images/01.jpg">
                                                        {

                                                        //    <img  src={prductdata.category.image} class="img-fluid" alt="" />

                                                        }

                                                    </div>
                                                </div>

                                            </div>{/*<!--end row-->*/}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-xl-5">
                                    <div class="product-info">
                                        <h4 class="product-title fw-bold mb-1">{prductdata.title}</h4>
                                        <p class="mb-0">{prductdata.description}</p>
                                        <div class="product-rating">
                                            <div class="hstack gap-2 border p-1 mt-3 width-content">
                                                <div><span class="rating-number">4.8</span><i class="bi bi-star-fill ms-1 text-warning"></i></div>
                                                <div class="vr"></div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="product-price d-flex align-items-center gap-3">
                                            <div class="h4 fw-bold">Rs {prductdata.price}</div>
                                            <div class="h5 fw-light text-muted text-decoration-line-through">$2089</div>
                                            <div class="h4 fw-bold text-danger">(70% off)</div>
                                        </div>
                                        <p class="fw-bold mb-0 mt-1 text-success">inclusive of all taxes</p>

                                        {/* <div class="more-colors mt-4">
                                                <h6 class="fw-bold mb-3">More Colors</h6>
                                                <div class="d-flex align-items-center gap-3">
                                                    <div class="">
                                                        <a href="javascript:;">
                                                            <img src='' width="65" alt="" />
                                                        </a>
                                                    </div>
                                                    <div class="">
                                                        <a href="javascript:;">
                                                            <img src="assets/images/featured-products/02.webp" width="65" alt="" />
                                                        </a>
                                                    </div>
                                                    <div class="">
                                                        <a href="javascript:;">
                                                            <img src="assets/images/featured-products/03.webp" width="65" alt="" />
                                                        </a>
                                                    </div>
                                                    <div class="">
                                                        <a href="javascript:;">
                                                            <img src="assets/images/featured-products/04.webp" width="65" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div> */}

                                        <div class="size-chart mt-4">
                                            <h6 class="fw-bold mb-3">Select Size</h6>
                                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                                <div class="">
                                                    <button type="button">XS</button>
                                                </div>
                                                <div class="">
                                                    <button type="button">S</button>
                                                </div>
                                                <div class="">
                                                    <button type="button">M</button>
                                                </div>
                                                <div class="">
                                                    <button type="button">L</button>
                                                </div>
                                                <div class="">
                                                    <button type="button">XL</button>
                                                </div>
                                                <div class="">
                                                    <button type="button">XXL</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cart-buttons mt-3">
                                            <div class="buttons d-flex flex-column flex-lg-row gap-3 mt-4">
                                                <a onClick={()=>handleadd(prductdata)} href="javascript:;" class="btn btn-lg btn-dark btn-ecomm px-5 py-3 col-lg-6"><i class="bi bi-basket2 me-2"></i>Add to Bag</a>
                                                <a href="javascript:;" class="btn btn-lg btn-outline-dark btn-ecomm px-5 py-3"><i class="bi bi-suit-heart me-2"></i>Wishlist</a>
                                            </div>
                                        </div>
                                        <hr class="my-3" />
                                        <div class="product-info">
                                            <h6 class="fw-bold mb-3">Product Details</h6>
                                            <p class="mb-1">There are many variations of passages of Lorem Ipsum</p>
                                            <p class="mb-1">All the Lorem Ipsum generators on the Internet tend to repeat</p>
                                            <p class="mb-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece</p>
                                            <p class="mb-1">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                        </div>
                                        <hr class="my-3" />
                                        <div class="customer-ratings">
                                            <h6 class="fw-bold mb-3">Customer Ratings</h6>
                                            <div class="d-flex align-items-center gap-4 gap-lg-5 flex-wrap flex-lg-nowrap">
                                                <div class="">
                                                    <h1 class="mb-2 fw-bold">4.8<span class="fs-5 ms-2 text-warning"><i class="bi bi-star-fill"></i></span></h1>
                                                    <p class="mb-0">3.8k Verified Buyers</p>
                                                </div>
                                                <div class="vr d-none d-lg-block"></div>
                                                <div class="w-100">
                                                    <div class="rating-wrrap hstack gap-2 align-items-center">
                                                        <p class="mb-0">5</p>
                                                        <div class=""><i class="bi bi-star"></i></div>
                                                        <div class="progress flex-grow-1 mb-0 rounded-0" style={{ height: "4px" }}>
                                                            <div class="progress-bar bg-success" role="progressbar" style={{ width: "75%" }}></div>
                                                        </div>
                                                        <p class="mb-0">1528</p>
                                                    </div>
                                                    <div class="rating-wrrap hstack gap-2 align-items-center">
                                                        <p class="mb-0">4</p>
                                                        <div class=""><i class="bi bi-star"></i></div>
                                                        <div class="progress flex-grow-1 mb-0 rounded-0" style={{ height: "4px" }}>
                                                            <div class="progress-bar bg-success" role="progressbar" style={{ width: "65%" }}></div>
                                                        </div>
                                                        <p class="mb-0">253</p>
                                                    </div>
                                                    <div class="rating-wrrap hstack gap-2 align-items-center">
                                                        <p class="mb-0">3</p>
                                                        <div class=""><i class="bi bi-star"></i></div>
                                                        <div class="progress flex-grow-1 mb-0 rounded-0" style={{ height: "4px" }}>
                                                            <div class="progress-bar bg-info" role="progressbar" style={{ width: "45%" }}></div>
                                                        </div>
                                                        <p class="mb-0">258</p>
                                                    </div>
                                                    <div class="rating-wrrap hstack gap-2 align-items-center">
                                                        <p class="mb-0">2</p>
                                                        <div class=""><i class="bi bi-star"></i></div>
                                                        <div class="progress flex-grow-1 mb-0 rounded-0" style={{ height: "4px" }}>
                                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "35%" }}></div>
                                                        </div>
                                                        <p class="mb-0">78</p>
                                                    </div>
                                                    <div class="rating-wrrap hstack gap-2 align-items-center">
                                                        <p class="mb-0">1</p>
                                                        <div class=""><i class="bi bi-star"></i></div>
                                                        <div class="progress flex-grow-1 mb-0 rounded-0" style={{ height: "4px" }}>
                                                            <div class="progress-bar bg-danger" role="progressbar" style={{ width: "25%" }}></div>
                                                        </div>
                                                        <p class="mb-0">27</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>{/*<!--end row-->*/}
                        </div>
                    </section>
                    {/*<!--start product details-->*/}


                    {/* {/*<!--start product details-->*/}
                    {/* <section class="section-padding">
                            <div class="container">
                                <div class="separator pb-3">
                                    <div class="line"></div>
                                    <h3 class="mb-0 h3 fw-bold">Similar Products</h3>
                                    <div class="line"></div>
                                </div>
                                <div class="similar-products">
                                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
                                        <div class="col">
                                            <a href="javascript:;">
                                                <div class="card rounded-0">
                                                    <img src="assets/images/best-sellar/03.webp" alt="" class="card-img-top rounded-0" />
                                                    <div class="card-body border-top">
                                                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                        <div class="product-price d-flex align-items-center gap-3 mt-2">
                                                            <div class="h6 fw-bold">$458</div>
                                                            <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                            <div class="h6 fw-bold text-danger">(70% off)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="javascript:;">
                                                <div class="card rounded-0">
                                                    <img src="assets/images/new-arrival/02.webp" alt="" class="card-img-top rounded-0" />
                                                    <div class="card-body border-top">
                                                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                        <div class="product-price d-flex align-items-center gap-3 mt-2">
                                                            <div class="h6 fw-bold">$458</div>
                                                            <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                            <div class="h6 fw-bold text-danger">(70% off)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="javascript:;">
                                                <div class="card rounded-0">
                                                    <img src="assets/images/best-sellar/02.webp" alt="" class="card-img-top rounded-0" />
                                                    <div class="card-body border-top">
                                                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                        <div class="product-price d-flex align-items-center gap-3 mt-2">
                                                            <div class="h6 fw-bold">$458</div>
                                                            <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                            <div class="h6 fw-bold text-danger">(70% off)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="javascript:;">
                                                <div class="card rounded-0">
                                                    <img src="assets/images/new-arrival/04.webp" alt="" class="card-img-top rounded-0" />
                                                    <div class="card-body border-top">
                                                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                        <div class="product-price d-flex align-items-center gap-3 mt-2">
                                                            <div class="h6 fw-bold">$458</div>
                                                            <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                            <div class="h6 fw-bold text-danger">(70% off)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="javascript:;">
                                                <div class="card rounded-0">
                                                    <img src="assets/images/new-arrival/05.webp" alt="" class="card-img-top rounded-0" />
                                                    <div class="card-body border-top">
                                                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                        <div class="product-price d-flex align-items-center gap-3 mt-2">
                                                            <div class="h6 fw-bold">$458</div>
                                                            <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                            <div class="h6 fw-bold text-danger">(70% off)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="javascript:;">
                                                <div class="card rounded-0">
                                                    <img src="assets/images/trending-product/03.webp" alt="" class="card-img-top rounded-0" />
                                                    <div class="card-body border-top">
                                                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                        <div class="product-price d-flex align-items-center gap-3 mt-2">
                                                            <div class="h6 fw-bold">$458</div>
                                                            <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                            <div class="h6 fw-bold text-danger">(70% off)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="javascript:;">
                                                <div class="card rounded-0">
                                                    <img src="assets/images/featured-products/05.webp" alt="" class="card-img-top rounded-0" />
                                                    <div class="card-body border-top">
                                                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                        <div class="product-price d-flex align-items-center gap-3 mt-2">
                                                            <div class="h6 fw-bold">$458</div>
                                                            <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                            <div class="h6 fw-bold text-danger">(70% off)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="javascript:;">
                                                <div class="card rounded-0">
                                                    <img src="assets/images/trending-product/05.webp" alt="" class="card-img-top rounded-0" />
                                                    <div class="card-body border-top">
                                                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                        <div class="product-price d-flex align-items-center gap-3 mt-2">
                                                            <div class="h6 fw-bold">$458</div>
                                                            <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                            <div class="h6 fw-bold text-danger">(70% off)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="javascript:;">
                                                <div class="card rounded-0">
                                                    <img src="assets/images/trending-product/01.webp" alt="" class="card-img-top rounded-0" />
                                                    <div class="card-body border-top">
                                                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                        <div class="product-price d-flex align-items-center gap-3 mt-2">
                                                            <div class="h6 fw-bold">$458</div>
                                                            <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                            <div class="h6 fw-bold text-danger">(70% off)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="javascript:;">
                                                <div class="card rounded-0">
                                                    <img src="assets/images/trending-product/02.webp" alt="" class="card-img-top rounded-0" />
                                                    <div class="card-body border-top">
                                                        <h5 class="mb-0 fw-bold product-short-title">Syndrona</h5>
                                                        <p class="mb-0 product-short-name">Color Printed Kurta</p>
                                                        <div class="product-price d-flex align-items-center gap-3 mt-2">
                                                            <div class="h6 fw-bold">$458</div>
                                                            <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                            <div class="h6 fw-bold text-danger">(70% off)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
        
        
                                    </div>
                                  
                                </div>
                            </div>
                        </section> */}



                </div>

            </div>



            {
                useEffect(() => {
                    products();

                }, [])
            }
        </>
    )


}

export default SingleProduct
