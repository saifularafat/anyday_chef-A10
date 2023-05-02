import React from 'react';
import ChefSpecialize from './ChefSpecialize';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const masterChef = useLoaderData();
    console.log();
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