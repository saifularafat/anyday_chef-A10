import React from 'react';

const Banner = () => {
    return (
        <div>

            {/* banner section style */}
            <div className='w-10/12 mx-auto'>
                <div className='py-6 px-8 bg-banner relative top-1/2 translate-y-2/4'>
                    <h2 className='text-3xl text-center md:text-6xl font-bold text-white pb-5'>Master Chef</h2>
                    <p className='text-white text-center text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam consequuntur quas iusto mollitia labore sequi? Porro necessitatibus quam autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti recusandae nemo earum reprehenderit suscipit ullam in ducimus provident. Molestias, earum!</p>
                    <div className='text-center'>
                        <button className='visit'>Visit Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;