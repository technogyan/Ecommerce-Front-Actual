import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, increaseItemQuantity, decreaseItemQuantity } from '../Redux/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  //const cartitem = useSelector((state) => state.cart);
  const cartitem = JSON.parse(localStorage.getItem('productsInCart'));
  const handleremove = (id) => {
    console.log(id); // Log the id to the console for debugging
    dispatch(removeItem(id)); // Dispatch the remove action with the id
  };

  const handleChange = (e, item) => {
    const newQuantity = parseInt(e.target.value); // Parse the input value to an integer
    updateQuantity(item.id, newQuantity); // Dispatch action to update quantity
  };



  return (
    <>

      <div class="page-content">


        {/*start breadcrumb*/}
        <div class="py-4 border-bottom">
          <div class="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
                <li class="breadcrumb-item"><a href="javascript:;">Shop</a></li>
                <li class="breadcrumb-item active" aria-current="page">Cart</li>
              </ol>
            </nav>
          </div>
        </div>
        {/*end breadcrumb*/}


        {/*start product details*/}
        <section class="section-padding">
          <div class="container">
            <div class="d-flex align-items-center px-3 py-2 border mb-4">
              <div class="text-start">
                <h4 class="mb-0 h4 fw-bold">My Bag (8 items)</h4>
              </div>
              <div class="ms-auto">
                <button type="button" class="btn btn-light btn-ecomm">Continue Shopping</button>
              </div>
            </div>
            <div class="row g-4">
              <div class="col-12 col-xl-8">


                {
                  cartitem.map(item => (
                    <div key={item.id} class="card rounded-0 mb-3">
                      <div class="card-body">
                        <div class="d-flex flex-column flex-lg-row gap-3">
                          <div class="product-img">
                            <img src={item.category.image} width="150" alt="" />
                          </div>
                          <div class="product-info flex-grow-1">
                            <h5 class="fw-bold mb-0">{item.title}</h5>
                            <div class="product-price d-flex align-items-center gap-2 mt-3">
                              <div class="h6 fw-bold">{item.price}</div>
                              <div class="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                              <div class="h6 fw-bold text-danger">(70% off)</div>
                            </div>
                            <div class="mt-3 hstack gap-2">
                              <button type="button" class="btn btn-sm btn-light border rounded-0" data-bs-toggle="modal" data-bs-target="#SizeModal">Size : M</button>
                              <button
                                className="btn btn-primary px-3 me-2"
                                onClick={() =>
                                  dispatch(decreaseItemQuantity(item.id))
                                }
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <div>
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={item.quantity || ''}
                                  type="number"
                                  className="form-control"
                                  onChange={(e) => handleChange(e, item.id)} // Pass item.id along with the event
                                />
                                <label className="form-label" for="form1">
                                  Quantity
                                </label>
                              </div>

                              <button
                                className="btn btn-primary px-3 ms-2"
                                onClick={() =>
                                  dispatch(increaseItemQuantity(item.id))
                                }
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                          </div>
                          <div class="d-none d-lg-block vr"></div>
                          <div class="d-grid gap-2 align-self-start align-self-lg-center">
                            <button onClick={() => handleremove(item.id)} type="button" class="btn btn-ecomm"><i class="bi bi-x-lg me-2"></i>Remove</button>
                            <button type="button" class="btn dark btn-ecomm"><i class="bi bi-suit-heart me-2"></i>Move to Wishlist</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))

                }



              </div>
              <div class="col-12 col-xl-4">
                <div class="card rounded-0 mb-3">
                  <div class="card-body">
                    <h5 class="fw-bold mb-4">Order Summary</h5>
                    <div class="hstack align-items-center justify-content-between">
                      <p class="mb-0">Bag Total</p>
                      <p class="mb-0">$599.00</p>
                    </div>
                    <hr />
                    <div class="hstack align-items-center justify-content-between">
                      <p class="mb-0">Bag discount</p>
                      <p class="mb-0 text-success">- $178.00</p>
                    </div>
                    <hr />
                    <div class="hstack align-items-center justify-content-between">
                      <p class="mb-0">Delivery</p>
                      <p class="mb-0">$29.00</p>
                    </div>
                    <hr />
                    <div class="hstack align-items-center justify-content-between fw-bold text-content">
                      <p class="mb-0">Total Amount</p>
                      <p class="mb-0">$393.00</p>
                    </div>
                    <div class="d-grid mt-4">
                      <button type="button" class="btn btn-dark btn-ecomm py-3 px-5">Place Order</button>
                    </div>
                  </div>
                </div>
                <div class="card rounded-0">
                  <div class="card-body">
                    <h5 class="fw-bold mb-4">Apply Coupon</h5>
                    <div class="input-group">
                      <input type="text" class="form-control rounded-0" placeholder="Enter coupon code" />
                      <button class="btn btn-dark btn-ecomm rounded-0" type="button">Apply</button>
                    </div>
                  </div>
                </div>


              </div>
              {/* </div><!--end row*/}

            </div>
          </div>
        </section>
        {/*start product details*/}

      </div>
    </>
  )
}

export default Cart
