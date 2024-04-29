import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addItem } from '../Redux/CartSlice';

const Shop = () => {
    const dispatch =useDispatch();
    const AllData = useSelector(state => state.Alldata)
    const handleadd = (product) => {
        dispatch(addItem({
          ...product,
          quantity: 1
      }))
      }
    
    return (
        <>

            <div class="page-content">
                <div class="py-4 border-bottom">
                    <div class="container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
                                <li class="breadcrumb-item"><a href="javascript:;">Shop</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Shop With Grid</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <section class="py-4">
                    <h5 class="mb-0 fw-bold d-none">Product Grid</h5>
                    <div class="container">
                        <div class="btn btn-dark btn-ecomm d-xl-none position-fixed top-50 start-0 translate-middle-y" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarFilter"><span><i class="bi bi-funnel me-1"></i> Filters</span></div>
                        <div class="row">
                            {/* <div class="col-12 col-xl-3 filter-column">
                                <nav class="navbar navbar-expand-xl flex-wrap p-0">
                                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbarFilter" aria-labelledby="offcanvasNavbarFilterLabel">
                                        <div class="offcanvas-header">
                                            <h5 class="offcanvas-title mb-0 fw-bold text-uppercase" id="offcanvasNavbarFilterLabel">Filters</h5>
                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            <div class="filter-sidebar">
                                                <div class="card rounded-0">
                                                    <div class="card-header d-none d-xl-block bg-transparent">
                                                        <h5 class="mb-0 fw-bold">Filters</h5>
                                                    </div>
                                                    <div class="card-body">
                                                        <h6 class="p-1 fw-bold bg-light">Categories</h6>
                                                        <div class="categories">
                                                            <div class="categories-wrapper height-1 p-1">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate1" />
                                                                    <label class="form-check-label" for="chekCate1">
                                                                        <span>Shirts</span><span class="product-number">(1548)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate2" />
                                                                    <label class="form-check-label" for="chekCate2">
                                                                        <span>Jeans</span><span class="product-number">(568)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate3" />
                                                                    <label class="form-check-label" for="chekCate3">
                                                                        <span>Kurtas</span><span class="product-number">(784)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate4" />
                                                                    <label class="form-check-label" for="chekCate4">
                                                                        <span>Makeup</span><span class="product-number">(1789)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate5" />
                                                                    <label class="form-check-label" for="chekCate5">
                                                                        <span>Shoes</span><span class="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate6" />
                                                                    <label class="form-check-label" for="chekCate6">
                                                                        <span>Heels</span><span class="product-number">(572)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate7" />
                                                                    <label class="form-check-label" for="chekCate7">
                                                                        <span>Lehenga</span><span class="product-number">(754)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate8" />
                                                                    <label class="form-check-label" for="chekCate8">
                                                                        <span>Laptops</span><span class="product-number">(541)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate9" />
                                                                    <label class="form-check-label" for="chekCate9">
                                                                        <span>Jewellary</span><span class="product-number">(365)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate10" />
                                                                    <label class="form-check-label" for="chekCate10">
                                                                        <span>Sports</span><span class="product-number">(4512)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate11" />
                                                                    <label class="form-check-label" for="chekCate11">
                                                                        <span>Music</span><span class="product-number">(647)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate12" />
                                                                    <label class="form-check-label" for="chekCate12">
                                                                        <span>Headphones</span><span class="product-number">(9848)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate13" />
                                                                    <label class="form-check-label" for="chekCate13">
                                                                        <span>Sunglasses</span><span class="product-number">(751)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekCate14" />
                                                                    <label class="form-check-label" for="chekCate14">
                                                                        <span>Belts</span><span class="product-number">(4923)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div class="brands">
                                                            <h6 class="p-1 fw-bold bg-light">Brands</h6>
                                                            <div class="brands-wrapper height-1 p-1">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand1" />
                                                                    <label class="form-check-label" for="chekBrand1">
                                                                        <span>Samsung</span><span class="product-number">(1548)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand2" />
                                                                    <label class="form-check-label" for="chekBrand2">
                                                                        <span>Sony</span><span class="product-number">(478)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand3" />
                                                                    <label class="form-check-label" for="chekBrand3">
                                                                        <span>Microsoft</span><span class="product-number">(689)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand4" />
                                                                    <label class="form-check-label" for="chekBrand4">
                                                                        <span>Reebok</span><span class="product-number">(987)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand5" />
                                                                    <label class="form-check-label" for="chekBrand5">
                                                                        <span>Adidas</span><span class="product-number">(358)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand6" />
                                                                    <label class="form-check-label" for="chekBrand6">
                                                                        <span>Puma</span><span class="product-number">(5682)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand7" />
                                                                    <label class="form-check-label" for="chekBrand7">
                                                                        <span>Ajio</span><span class="product-number">(5712)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand8" />
                                                                    <label class="form-check-label" for="chekBrand8">
                                                                        <span>Motorola</span><span class="product-number">(657)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand9" />
                                                                    <label class="form-check-label" for="chekBrand9">
                                                                        <span>amazon</span><span class="product-number">(984)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand10" />
                                                                    <label class="form-check-label" for="chekBrand10">
                                                                        <span>Canon</span><span class="product-number">(524)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand11" />
                                                                    <label class="form-check-label" for="chekBrand11">
                                                                        <span>Apple</span><span class="product-number">(168)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekBrand12" />
                                                                    <label class="form-check-label" for="chekBrand12">
                                                                        <span>Philips</span><span class="product-number">(279)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div class="Price">
                                                            <h6 class="p-1 fw-bold bg-light">Price</h6>
                                                            <div class="Price-wrapper p-1">
                                                                <div class="input-group">
                                                                    <input type="text" class="form-control rounded-0" placeholder="$10" />
                                                                    <span class="input-group-text bg-section-1 border-0">-</span>
                                                                    <input type="text" class="form-control rounded-0" placeholder="$10000" />
                                                                    <button type="button" class="btn btn-outline-dark rounded-0 ms-2"><i class="bi bi-chevron-right"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div class="colors">
                                                            <h6 class="p-1 fw-bold bg-light">Colors</h6>
                                                            <div class="color-wrapper height-1 p-1">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor1" />
                                                                    <label class="form-check-label" for="chekColor1">
                                                                        <i class="bi bi-circle-fill me-1 text-danger"></i><span>Red</span><span class="product-number">(845)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor2" />
                                                                    <label class="form-check-label" for="chekColor2">
                                                                        <i class="bi bi-circle-fill me-1 text-primary"></i><span>Blue</span><span class="product-number">(257)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor3" />
                                                                    <label class="form-check-label" for="chekColor3">
                                                                        <i class="bi bi-circle-fill me-1 text-warning"></i><span>Yellow</span><span class="product-number">(968)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor4" />
                                                                    <label class="form-check-label" for="chekColor4">
                                                                        <i class="bi bi-circle-fill me-1 text-success"></i><span>Green</span><span class="product-number">(478)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor5" />
                                                                    <label class="form-check-label" for="chekColor5">
                                                                        <i class="bi bi-circle-fill me-1 text-info"></i><span>Skyblue</span><span class="product-number">(256)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor6" />
                                                                    <label class="form-check-label" for="chekColor6">
                                                                        <i class="bi bi-circle-fill me-1 text-dark"></i><span>Black</span><span class="product-number">(124)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor7" />
                                                                    <label class="form-check-label" for="chekColor7">
                                                                        <i class="bi bi-circle-fill me-1 text-purple"></i><span>Purple</span><span class="product-number">(897)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor8" />
                                                                    <label class="form-check-label" for="chekColor8">
                                                                        <i class="bi bi-circle-fill me-1 text-orange"></i><span>Orange</span><span class="product-number">(68)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor9" />
                                                                    <label class="form-check-label" for="chekColor9">
                                                                        <i class="bi bi-circle-fill me-1 text-cyane"></i><span>Cyane</span><span class="product-number">(784)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor10" />
                                                                    <label class="form-check-label" for="chekColor10">
                                                                        <i class="bi bi-circle-fill me-1 text-brown"></i><span>Brown</span><span class="product-number">(532)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor11" />
                                                                    <label class="form-check-label" for="chekColor11">
                                                                        <i class="bi bi-circle-fill me-1 text-ten"></i><span>Ten</span><span class="product-number">(532)</span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="chekColor12" />
                                                                    <label class="form-check-label" for="chekColor12">
                                                                        <i class="bi bi-circle-fill me-1 text-pink"></i><span>Pink</span><span class="product-number">(452)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div class="discount">
                                                            <h6 class="p-1 fw-bold bg-light">Discount Range</h6>
                                                            <div class="discount-wrapper p-1">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" name="exampleRadios" type="radio" value="option1" id="chekDisc1" />
                                                                    <label class="form-check-label" for="chekDisc1">
                                                                        10% and Above
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" name="exampleRadios" type="radio" value="option2" id="chekDisc2" />
                                                                    <label class="form-check-label" for="chekDisc2">
                                                                        20% and Above
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" name="exampleRadios" type="radio" value="option3" id="chekDisc3" />
                                                                    <label class="form-check-label" for="chekDisc3">
                                                                        30% and Above
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" name="exampleRadios" type="radio" value="option4" id="chekDisc4" />
                                                                    <label class="form-check-label" for="chekDisc4">
                                                                        40% and Above
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" name="exampleRadios" type="radio" value="option5" id="chekDisc5" />
                                                                    <label class="form-check-label" for="chekDisc5">
                                                                        50% and Above
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" name="exampleRadios" type="radio" value="option6" id="chekDisc6" />
                                                                    <label class="form-check-label" for="chekDisc6">
                                                                        60% and Above
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" name="exampleRadios" type="radio" value="option7" id="chekDisc7" />
                                                                    <label class="form-check-label" for="chekDisc7">
                                                                        70% and Above
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input" name="exampleRadios" type="radio" value="option8" id="chekDisc8" />
                                                                    <label class="form-check-label" for="chekDisc8">
                                                                        80% and Above
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div> */}
                            <div class="col-12 col-xl-12">
                                <div class="shop-right-sidebar">
                                    <div class="card rounded-0">
                                        <div class="card-body p-2">
                                            <div class="d-flex align-items-center justify-content-between bg-light p-2">
                                                <div class="product-count">657 Items Found</div>
                                                <div class="view-type hstack gap-2 d-none d-xl-flex">
                                                    <p class="mb-0">Grid</p>
                                                    <div>
                                                        <a href="shop-grid.html" class="grid-type-3 d-flex gap-1">
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="shop-grid-type-4.html" class="grid-type-3 d-flex gap-1 active">
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <form>
                                                    <div class="input-group">
                                                        <span class="input-group-text bg-transparent rounded-0 border-0">Sort By</span>
                                                        <select class="form-select rounded-0">
                                                            <option selected>Whats'New</option>
                                                            <option value="1">Popularity</option>
                                                            <option value="2">Better Discount</option>
                                                            <option value="3">Price : Hight to Low</option>
                                                            <option value="4">Price : Low to Hight</option>
                                                            <option value="5">Custom Rating</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="product-grid mt-4 mx-auto">
                                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                                            {
                                                AllData.map((item, index) => (
                                                    index < 10 && (
                                                        <div class="col">
                                                            <div class="card border shadow-none">
                                                                <div class="position-relative overflow-hidden">
                                                                    <div class="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                                        {/* <a href="javascript:;"><i class="bi bi-heart"></i></a> */}
                                                                        <NavLink onClick={()=>handleadd(item)} to=''><i class="bi bi-basket3"></i></NavLink>
                                                                        {/* <a href="javascript:;"><i class="bi bi-zoom-in"></i></a> */}
                                                                    </div>
                                                                    <NavLink to={`/singleproduct/${item.id}`}>  <img src={item.category.image} class="card-img-top" alt="..." /></NavLink>
                                                                  
                                                                </div>
                                                                <div class="card-body border-top">
                                                                    <h5 class="mb-0 fw-bold product-short-title">{item.title}</h5>
                                                                    {/* <p class="mb-0 product-short-name" style={{textalign:"justify"}}>{item.description}</p> */}
                                                                    <div class="product-price d-flex align-items-center gap-2 mt-2">
                                                                        <div class="h6 fw-bold text-align-center">Rs {item.price}</div>
                                                                        <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                ))
                                            }


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Shop
