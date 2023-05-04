import React from 'react';
import { useParams } from 'react-router-dom';
import img from './../../../../public/chef1.png'

const Chef = () => {
    const id = useParams()
    return (
        <div className="card card-side mx-auto bg-slate-500 shadow-xl">
         
                <figure><img src={img} alt="Movie"
                    className='w-80 h-80 py-5 px-5' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Massimo Bottura</h2>
                    <ul>
                        <li>pancetta or bacon</li>
                        <li>grated Pecorino Romano cheese</li>
                        <li>spaghetti</li>
                        <li>Italian cheese</li>
                        <li>Risotto Alla Milanese</li>
                        <li>Porcini mushrooms</li>
                        <li>Neapolitan pizza</li>
                        <li>Egg Noodles Recipe</li>
                    </ul>
                </div>
        </div>
    );
};

export default Chef;