
import React from 'react';
import { toast } from 'react-hot-toast';

const Food = ({ food }) => {
    const { id, chef_id, details, name, image, like, rating } = food;
    console.log(food);

    const handlerToast = () => {
        // toast.success('Food Added')
        toast('added')
    }
    return (
        <div className="card md:w-72 mx-3 my-12 glass">
            <figure>
                <img
                    src={image}
                    alt="food"
                    className='w-full h-44' />
            </figure>
            <div
                className=" md:mx-5 mx-2 py-3">
                <h2 className="text-2xl font-serif"><span className='font-serif font-semibold'>Name:</span> {name}</h2>
                <p className='my-3'>
                    <span className='text-xl font-serif font-medium underline pr-2'>Food Details:</span>
                    {details}</p>
                <hr />
                <div className="flex justify-between items-center py-5">
                    <p><span>{rating}</span></p>
                    <p><span>{like}</span></p>
                </div>
                <div>
                    <button
                    onClick={handlerToast}
                        className="foodbtn gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Favorite Food
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Food;