import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food';
import Chef from './Chef';

const ChefDetails = () => {

    const [chefs, setChef] = useState([]);
    const chefFood = useLoaderData([])

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div className='bg-slate-500'>
            <div>
                <Chef />
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