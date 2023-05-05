import React, { useEffect, useState } from 'react';
import ChefSpecialize from './ChefSpecialize';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import ChefCard from './ChefCard';


const Home = () => {
    const [masterChef, setMasterChef] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-server-saifularafat.vercel.app/chef')
            .then(res => res.json())
            .then(data => setMasterChef(data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div>
            {/* banner section style and component */}
           <Banner />

            {/* Chef Specialize section */}
            <ChefSpecialize />

            <div className='bg-second_bg py-16 z-10 '>
                {/* Master Chef section Title and description */}
                <div className='text-center text-white md:w-[900px] md:mx-auto mx-3 mb-16'>
                    <h2 className=' md:text-5xl text-3xl font-serif text-black font-bold pb-4'> Master Chefs</h2>
                    <p className=''>programma non presenta conduttori: le puntate sono introdotte e chiuse dalla voce fuori campo di Simone D'Andrea e commentate da una voce femminile Luisa Ziliotto per le prime cinque edizioni, Stefania Nali per la sesta e la settima e Ilaria Egitto dall'ottava</p>
                </div>

                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        masterChef.map(chef => <ChefCard
                            key={chef._id}
                            chef={chef}
                        >
                            <Link to={`/${chef._id}`}>

                            </Link>
                        </ChefCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;