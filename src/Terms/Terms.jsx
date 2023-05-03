import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container mx-auto h-96 text-white mt-12'>
            <h2 className='text-3xl font-bold tracking-wide pb-7'>#Terms And Condition Component</h2>
            <p className='text-xl'><span className='pr-2'>1.</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil non quae itaque iste sequi. Cumque sequi vitae exercitationem dolores asperiores officia culpa molestiae assumenda a.</p>
            <p className='text-xl'><span className='pr-2'>2.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid repellat facere cum soluta.</p>
            <p className='text-xl'><span className='pr-2'>3.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum doloremque consequuntur numquam cumque quod soluta a mollitia!</p>

            <div className='py-24'>
                <p>
                    <Link to='/register' className="visit">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Terms;