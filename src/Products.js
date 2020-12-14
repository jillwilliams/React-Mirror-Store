import React from 'react';
import Header from './Header';
import './Products.css';

function Products() {
    return (
        <div>
            <Header />
            <div className="products">
                <div className="products__pricing">
                    <p>
                        Product Pricing
                    </p>
                    <div className="products__description">
                        <p>
                            My Mirror Store has been making hand-crafted mirrors since 2006.  Each mirror is custom-made to meet each customer's needs. Choose from pre-made designs, or create-your own mirror using ideas you have for your mirror. For example, logos are very easy to use when creating a mirror. We can create almost any design you could hope for. 
                        </p>
                        <p>
                            Mirror pricing is based upon the size of the mirror, the complexity of the design and the type of wood used. 
                        </p>
                    </div>
                </div>
                <div className="products__sizing">
                    <p>
                        Mirror Sizes
                    </p>
                    <div className="products__description">
                        <p>
                            Mirrors are circular and come in three different sizes: 5-inch, 10-inch, or 12-inch. The size of the mirror typically dictates the price, with some exceptions, such as complexity of design.
                        </p>
                    </div>
                </div>
                <div className="products__finish">
                    <p>
                        Product Finish
                    </p>
                    <div className="products__description">
                        <p>
                            Each mirror is finished to create a long-lasting "new" look. Mirrors are removeable for easy cleaning/dusting.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
