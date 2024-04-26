import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import MainCart from './MainCart'

const Cart = () => {
  const dispatch = useDispatch();
  const cartitem =useSelector((state) => state.cart.items);
  const carttotal =useSelector((state) => state.cart);
  const total=carttotal.total

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
                   cartitem.map(item => {
                    return (
                        <MainCart 
                            key={item?.id}
                            data={item}
                        />
                    )
                })

                }



              </div>
              <div class="col-12 col-xl-4">
                <div class="card rounded-0 mb-3">
                  <div class="card-body">
                    <h5 class="fw-bold mb-4">Order Summary</h5>
                    <div class="hstack align-items-center justify-content-between">
                      <p class="mb-0">Bag Total</p>
                      <p class="mb-0">{total}</p>
                    </div>
                    
                    {/* <div class="hstack align-items-center justify-content-between">
                      <p class="mb-0">Bag discount</p>
                      <p class="mb-0 text-success">- $178.00</p>
                    </div> */}
                  
                    {/* <div class="hstack align-items-center justify-content-between">
                      <p class="mb-0">Delivery</p>
                      <p class="mb-0">$29.00</p>
                    </div> */}
                    <hr />
                    <div class="hstack align-items-center justify-content-between fw-bold text-content">
                      <p class="mb-0">Total Amount</p>
                      <p class="mb-0">{total}</p>
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
