import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decQty, deleteCart, incQty } from '../../redux/action/cart.action';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart(props) {
    const medicines = useSelector(state => state.medicines)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const cartData = cart.cart.map((v) => {
        const med = medicines.medicines.find((m) => m.id === v.id)

        let fData = { ...med, qty: v.qty }

        return fData
    })
    console.log(cartData);

    console.log(medicines);
    console.log(cart);

    let total = cartData.reduce((acc, v) => acc + (v.price * v.qty), 0)
    console.log(total);

    const hanleInc = (id) => {
        dispatch(incQty(id))
        console.log(id);
    }

    const handleDec = (id) => {
        dispatch(decQty(id))
    }

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteCart(id))
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
                                    <button className="plus-btn" type="button" name="button" onClick={() => hanleInc(v.id)}>
                                        +
                                    </button>
                                    {/* <input type="text" name="name" defaultValue={v.qty} /> */}
                                    <span>{v.qty}</span>
                                    <button className="minus-btn" type="button" name="button" onClick={() => handleDec(v.id)}>
                                        -
                                    </button>

                                    {/* <DeleteIcon onClick={() => handleDelete(v.id)} />  */}

                                </div>
                                <div className="total-price">${v.price * v.qty}</div>

                                <div className='delete' onClick={() => handleDelete(v.id)}>
                                    <DeleteIcon />
                                </div>

                            </div>
                        )
                    })
                }
                 <h6 className='total'>Total:{total}</h6>
            </div>
    );
}

export default Cart;