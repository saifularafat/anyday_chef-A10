import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import banner from '../../assets/banner/banner7.jpg'

const Blog = () => {
    const ref = useRef();
    return (
        <div>
            <div style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                height: '60vh',
                width: "100%"
            }}>
                <h2 className='page_banner-title md:pt-32 pt-24 text-black font-bold '>Home/Blog</h2>
            </div>
            <div  ref={ref} className='grid grid-cols-1 md:grid-cols-2 gap-8 my-container mt-12 relative mx-3 py-14'>
                <div>
                    <div className='blog-cart hover:bg-amber-200'>
                        <h2 className='blog-question text-orange-700'>Question.1 : Tell us the differences between uncontrolled and controlled components?</h2>
                        <p className='blog-ans'>
                            The parent component's pass th.
                            An uncontrolled component is a component that manages its own state acts as the child component's polyps. The child component simply renders state and calls functions called by the parent component. Controlled props are useful when elements have specific controls over their behavior.
                            An uncontrolled component is a component that manages its own state internally
                        </p>
                    </div>
                    <div className='blog-cart hover:bg-rose-200'>
                        <h2 className='blog-question text-blue-600'>Question.2 : How to validate React props using PropTypes?</h2>
                        <p className='blog-ans'>Prop Types passed from prop-types can be used to validate props passed to an element. When a prop does not match its prop types, a warning will be logged to the console. Using prop types to validate props will catch bugs and keep the code safe.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='blog-cart hover:bg-gray-300 hover:text-stone-700'>
                        <h2 className='blog-question text-green-500'>Question.3 : Tell us the difference between nodejs and express js.?</h2>
                        <p className='blog-ans'>node.js is used to run JavaScript code outside of a web browser. And express. js is a web application framework built on top of node.js and provides a set of API creation tools. node.js is a runtime environment, where express. js is a framework built on top of node.js. node.js provides low-level APIs for building network applications, while express.js provides a high-level set of APIs.
                        </p>
                    </div>
                    <div className='blog-cart hover:bg-indigo-300'>
                        <h2 className='blog-question text-fuchsia-600'>Question.4 : What is a custom hook, and why will you create a custom hook?</h2>
                        <p className='blog-ans'>A custom hook is a function of React that makes it reusable using one or more built-in hooks. UseEffect hooks to retrieve data from the api, handling the loading state using useState and useEffect. These two hooks load data and return data. Custom hooks can be or have been used for a range of data fetching, caching, authentication, and more.</p>
                    </div>
                </div>
            </div>

            <div className='text-center'>
                <ReactToPrint trigger={() =><button className='printbtn'>Print</button>} content={()=> ref.current} />
            </div>
        </div>
    );
};

export default Blog;