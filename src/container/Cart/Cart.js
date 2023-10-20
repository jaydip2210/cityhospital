import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decQty, incQty } from '../../redux/action/cart.action';

function Cart(props) {
    const medicines = useSelector(state => state.medicines)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const cartData = cart.cart.map((v) => {
        const med = medicines.medicines.find((m) => m.id === v.id)

        return { ...med, qty: v.qty }
    })
    console.log(cartData);

    console.log(medicines);
    console.log(cart);

    const hanleInc = (id) => {
        dispatch(incQty(id))
    }

    const handleDec = (id) => {
        dispatch(decQty(id))
    }

    return (
        <div className="shopping-cart">
            <div className="title">
                Medicine Bag
            </div>
            {
                cartData.map((v) => {
                    return (
                        <div className="item">
                            <div className="buttons">
                                <span className="delete-btn" />
                                <span className="like-btn" />
                            </div>
                            <div className="image">
                                <img src="item-1.png" alt />
                            </div>
                            <div className="description">
                                <span>{v.name}</span>
                                {/* <span>{v.desc}</span> */}
                            </div>
                            <div className="quantity">
                                <button className="plus-btn" type="button" name="button" onClick={hanleInc(v.id)}>
                                    +
                                </button>
                                {/* <input type="text" name="name" defaultValue={v.qty} /> */}
                                <span>{v.qty}</span>
                                <button className="minus-btn" type="button" name="button" onClick={handleDec(v.id)}>
                                    -
                                </button>
                            </div>
                            <div className="total-price">${v.price}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cart;