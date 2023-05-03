import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='page_banner'>
                <h2 className='page_banner-title'>Home/Blog</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-container mt-12 relative mx-3 '>
                <div>
                    <div className='blog-cart hover:bg-amber-200'>
                        <h2 className='blog-question text-orange-700'>Question.1 : why the context api use?</h2>
                        <p className='blog-ans'>Context is a special key of React that can be sent to all components without sending props, passing data through a tree.  Through this, different component data can be divided very easily.  Where data needs to be sent through nested layers.
                        </p>
                    </div>
                    <div className='blog-cart hover:bg-rose-200'>
                        <h2 className='blog-question text-blue-600'>Question.2 : What is react custom hook?</h2>
                        <p className='blog-ans'>A custom hook is a hook that can be used over and over again in different locations as needed.  Custom hooks can call other hooks.  For example, custom hooks are used to handle data retrieval, form filling, and key animations.  Custom hooks are used consistently.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='blog-cart hover:bg-teal-300 hover:text-stone-700'>
                        <h2 className='blog-question text-red-950'>Question.3 : What is the useRef ?</h2>
                        <p className='blog-ans'>The useRef hook in React can reference many objects that can change anything.  useRef is used to persist a value between renders.  The useref hook is used to create a class component variable as well as its components.  Updating values ​​stored in the useref store may not trigger a re-render.  Used to store  callback functions.</p>
                    </div>
                    <div className='blog-cart hover:bg-indigo-300'>
                        <h2 className='blog-question text-fuchsia-950'>Question.4 : What is the useMemo ?</h2>
                        <p className='blog-ans'>In React, the useMemo hook is used to remember expensive computations so that they can be run again as needed. Memoization is a technique that involves the function's result so that if it is called again with the same argument, the useMemo hook is arguments: one is a function and the other is an array.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;