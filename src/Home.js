import React from 'react';
import "./Home.css";
import Product from './Product';
import Freedom from './images/airforce.png';
import Holly from './images/holly.png';
import Candycane from './images/candycane.png';
import Bells from './images/bells.png';
import Denver from './images/denver-ornament.png';
import Oregon from './images/oregon-ornament.png';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* <img src={} alt="" /> */}
                <div className="home__row">
                    <Product 
                        title="Freedom Isn't Free"
                        price={125}
                        description="12-inch mirror"
                        image={Freedom}
                        id="100" />
                    <Product 
                        title="Christmas: Holly Leaves"
                        price={25}
                        description="5-inch mirror"
                        image={Holly}
                        id="101" />
                </div>
                <div className="home__row">
                    <Product 
                        title="Christmas: Candy Cane"
                        price={25}
                        description="5-inch mirror"
                        image={Candycane}
                        id="102" />
                    <Product 
                        title="Christmas: Bells"
                        price={25}
                        description="5-inch mirror"
                        image={Bells}
                        id="103" />
                </div>
                <div className="home__row">
                    <Product 
                        title="Christmas: Oregon Ducks"
                        price={10}
                        description="Ornament"
                        image={Oregon}
                        id="104" />
                    <Product 
                        title="Christmas: Denver Broncos"
                        price={10}
                        description="Ornament"
                        image={Denver}
                        id="105" />
                </div>
            </div>
        </div>
    );
}

export default Home;
