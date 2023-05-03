import React from 'react';
import banner_chef from '../../../public/banner/banner-chef1.png'
import { Link } from 'react-router-dom';

const ChefCard = () => {
    return (
        <div className='bg-second_bg py-28'>
            <div className='text-center text-white md:w-[900px] md:mx-auto mx-3 mb-16'>
                <h2 className=' md:text-5xl text-3xl font-serif text-black font-bold pb-4'>Master Chef</h2>
                <p className=''>programma non presenta conduttori: le puntate sono introdotte e chiuse dalla voce fuori campo di Simone D'Andrea e commentate da una voce femminile Luisa Ziliotto per le prime cinque edizioni, Stefania Nali per la sesta e la settima e Ilaria Egitto dall'ottava</p>
            </div>
            <div className='grid md:grid-cols-3 gap-5 px-5'>
                <div className="container mx-auto card md:w-96 bg-slate-500 py-6 shadow-xl">
                    <div>
                        <figure>
                            <img src={banner_chef} alt=""
                                className='main_chef bg-white'
                            />
                        </figure>
                        <p className='text-center text-white text:2xl md:text-3xl font-semibold font-sans'><small>Peterson Schiffer</small></p>
                    </div>
                    <div className="card-body pb-3 text-center">
                        <h2
                            className=" text-white text-2xl font-medium pb-3"
                        >We Specialize in Modern <br />
                            Fusion Cuisine
                        </h2>
                        <p className='text-white text-center'>
                        </p>
                        <Link to='blog'>
                            <button className='visit'>View Chef</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChefCard;