import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food';

const ChefDetails = () => {
    const chefFood = useLoaderData([]);
    console.log(chefFood);
    const chefImage = chefFood[0];
    console.log(chefFood[0].recipeName[0]);

    return (
        <div className='bg-slate-500'>
            <div className='md:flex w-full mx-auto py-5 md:py-10 border'>
                <div className='mx-14'>
                    <img
                        src={chefImage.coverImg}
                        alt=""
                        className='md:w-96 md:h-96 bg-slate-400 p-5 rounded-3xl text-center'
                    />
                </div>
                <div className='bg-gray-400 p-6 rounded-lg'>
                    <h2 className='text-3xl font-semibold py-5 border-b-2'>RecipeName</h2>
                    <ul className='text-lg pt-2'>
                        <li>1.{chefFood[0]?.recipeName[0]}</li>
                        <li>2.{chefFood[0]?.recipeName[1]}</li>
                        <li>3.{chefFood[0]?.recipeName[2]}</li>
                        <li>4.{chefFood[0]?.recipeName[3]}</li>
                        <li>5.{chefFood[0]?.recipeName[4]}</li>
                        <li>6.{chefFood[0]?.recipeName[5]}</li>
                        <li>7.{chefFood[0]?.recipeName[6]}</li>
                        <li>8.{chefFood[0]?.recipeName[7]}</li>
                    </ul>
                </div>
            </div>
            <div className=' grid md:grid-cols-3 gap-5'>
                {
                    chefFood.map(food => <Food
                        key={food.id}
                        food={food}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;