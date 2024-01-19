import React from 'react'

function Footer() {
    return (
        <div className="bg-slate-100 bg-w-full bg-h-full h-[500px] ">
        <div className="grid gap-x-8 gap-y-4 px-[60px] py-[50px] grid-cols-4 mt-[50px] mx-10 ">
            <div className='text-xl '>
                <nav>
                    <h6 className='font-semibold text-3xl my-3'>ABOUT ZOMATO</h6>
                    <a href="#" >
                        <p className='my-3 text-slate-500'>Who We Are</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Blog</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Work With Us</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Investor Relations</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Report Fraud</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Press Kit</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Contact Us</p>
                    </a>
                </nav>
            </div>
            <div className='text-xl '>
                <nav>
                    <h6 className='font-semibold text-3xl my-3'>ZOMAVERSE</h6>
                    <a href="#" >
                        <p className='my-3 text-slate-500'>Zomato</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Blinkit</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Feeding India</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Hyperpure</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Zomaland</p>
                    </a>
                </nav>
            </div>
            <div className='text-xl '>
                <nav>
                    <h6 className='font-semibold text-3xl my-3'>FOR RESTAURANTS</h6>
                    <a href="#" >
                        <p className='my-3 text-slate-500'>Partner With Us</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Apps For You</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>FOR ENTERPRISES</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Zomato For Enterprise</p>
                    </a>
                </nav>
            </div>
            <div className='text-xl '>
                <nav>
                    <h6 className='font-semibold text-3xl my-3'>LEARN MORE</h6>
                    <a href="#" >
                        <p className='my-3 text-slate-500'>Privacy</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Security</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Terms</p>
                    </a>
                    <a href="#">
                        <p className='my-3 text-slate-500'>Sitemap</p>
                    </a>
                </nav>
            </div>
        </div>  
        </div>
    )
}

export default Footer
