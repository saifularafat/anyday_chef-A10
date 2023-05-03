import React from 'react';
import banner_chef from '../../../public/banner/banner-chef1.png'
import specialize from '../../../public/banner/site_img.jpg'
import specialize1 from '../../../public/banner/site_img1.jpg'


const ChefSpecialize = () => {
    return (
        <div className='my_container mx-2 grid md:grid-cols-3 gap-5 pt-32  bg-second_bg'>
            <div className='card mx-auto'>
                <img src={specialize}
                    alt=""
                    className='h-full rounded-2xl'
                />
            </div>
            <div className="card bg-banner">
                <div className="card-body pb-3 text-center mt-10">
                    <h2
                        className=" text-white text-2xl md:text-5xl font-serif font-medium leading-loose pb-3"
                    >We Specialize in Modern <br />
                        Fusion Cuisine
                    </h2>
                    <p className='text-white text-lg text-center md:pt-5'>The height quality, Fresh Products paired with excellent
                        craftsmanship in cooking. Le Chef was established in 1988 and has
                        received the highly acclaimed michelin star in 2001.
                        <br /> <br />
                        "For us everything starts with passion for food."
                    </p>
                </div>
                <figure>
                    <img src={banner_chef} alt=""
                        className='main_chef bg-white'
                    />
                </figure>
                <p className='text-center text-white text-3xl font-semibold font-sans pb-8'><small>Peterson Schiffer</small></p>
            </div>
            <div className='card'>
                <img src={specialize1}
                    alt=""
                    className='h-full rounded-2xl'
                />
            </div>
        </div>
    );
};

export default ChefSpecialize;