import React from 'react';
import Header from '../Share/Header';
import banner_chef from '../../../public/banner/banner-chef1.png'
import ChefSpecialize from './ChefSpecialize';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div>
                <div style={{
                    backgroundImage: ['url(../../../../../public/banner/banner.jpg)'],
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',
                    height: '100vh',
                    width: "100%"
                }}>

                    {/* Banner section component*/}
                    <Banner />

                </div>
            </div>

            {/* Chef Specialize section */}
            <ChefSpecialize />
        </div>
    );
};

export default Home;