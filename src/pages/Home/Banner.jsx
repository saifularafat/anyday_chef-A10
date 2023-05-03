import React from 'react';

const Banner = () => {
    return (
        <div>

            {/* banner section style */}
            <div className='md:w-8/12 mx-auto'>
                <div className='py-2 md:py-5 px-8 bg-banner relative top-1/2 translate-y-2/4'>
                    <h2 className='text-3xl text-center md:text-6xl font-bold text-white pb-5'>Master Chef</h2>
                    <p className='text-white text-center text-lg'>The height quality, Fresh Products paired with excellent
                        craftsmanship in cooking. Le Chef was established in 1988 and has
                        received the highly acclaimed michelin star in 2001.
                        programma non presenta conduttori: le puntate sono introdotte e chiuse dalla voce fuori campo di Simone D'Andrea e commentate da una voce femminile Luisa Ziliotto per le prime cinque edizioni, Stefania Nali per la sesta e la settima e Ilaria Egitto dall'ottava!</p>
                    <div className='text-center'>
                        <button className='visit'>Visit Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;