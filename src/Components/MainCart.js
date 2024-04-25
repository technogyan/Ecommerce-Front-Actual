import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, increaseItemQuantity, decreaseItemQuantity } from '../Redux/CartSlice';

const MainCart = (item) => {
    const dispatch = useDispatch()
    const consquantity = item.data.quantity
    const [quantity, setQuantity] = useState(consquantity)
    const [totalPrice, setTotalPrice] = useState(+item.price * +consquantity)

    const handleremove = (id) => {
        //console.log(id); // Log the id to the console for debugging
        dispatch(removeItem({ id })) // Dispatch the remove action with the id
    };

    const handleChange = (e) => {
        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1
        setQuantity(value)
    }

    useEffect(() => {
        setTotalPrice(item.data.price * quantity)
        dispatch(updateQuantity({ id: item.data?.id, quantity }))
        console.log(`id${item.data?.id} and quantity ${item.data?.quantity}`)
    }, [quantity, item.data?.price, item.data?.id, dispatch])


    return (
        <>
            <div class="card rounded-0 mb-3">
                <div class="card-body">
                    <div class="d-flex flex-column flex-lg-row gap-3">
                        <div class="product-img">
                            <img src={item.image} width="150" alt="" />
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
                                <div className="d-flex align-items-center justify-content-center">
                                    <button onClick={() => {
                                        if (quantity > 1) {
                                            setQuantity(pre => pre - 1)
                                        }
                                    }}>-</button>
                                    <input type="number" value={quantity} onChange={(e) => handleChange(e.target.value)} />
                                    <button onClick={() => setQuantity(pre => pre + 1)}>+</button>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-lg-block vr"></div>
                        <div class="d-grid gap-2 align-self-start align-self-lg-center">
                            <button onClick={() => handleremove(item.data.id)} type="button" class="btn btn-ecomm"><i class="bi bi-x-lg me-2"></i>Remove</button>
                            <button type="button" class="btn dark btn-ecomm"><i class="bi bi-suit-heart me-2"></i>Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainCart
