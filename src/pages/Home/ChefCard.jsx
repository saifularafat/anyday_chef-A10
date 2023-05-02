import React from 'react';
import banner_chef from '../../../public/banner/banner-chef1.png'
import { Link } from 'react-router-dom';

const ChefCard = () => {
    return (
        <div className='my_container mx-2 grid md:grid-cols-3 gap-5 py-20 bg-second_bg'>
            <div className="card w-96 bg-slate-500 py-6">
                <div>
                    <figure>
                        <img src={banner_chef} alt=""
                            className='main_chef bg-white'
                        />
                    </figure>
                    <p className='text-center text-white text:2xl md:text-3xl font-semibold font-sans mb-3'><small>Peterson Schiffer</small></p>
                </div>
                <div className="card-body pb-3 text-center mt-10">
                    <h2
                        className=" text-white text-2xl font-medium pb-3"
                    >We Specialize in Modern <br />
                        Fusion Cuisine
                    </h2>
                    <p className='text-white text-center'>
                    </p>
                    <Link to= 'blog'>
                        <button className='visit'>View Chef</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ChefCard;