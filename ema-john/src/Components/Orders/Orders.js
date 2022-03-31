import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products] = useProducts();
    const [cart] = useCart(products)
    return (
        <div>
            <h2>this is order :{products.length}</h2>
            <p>cart has:{cart.length}</p>
        </div>
    );
};

export default Orders;