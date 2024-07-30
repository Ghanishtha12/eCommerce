import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our
                        <span className=' text-orange-400 font-bold underline decoration-wavy'> customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block
                                 border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">My experience with the customer service team here was
                                    nothing short of exceptional. I encountered a minor issue with my order and reached out to their support team for assistance.They
                                    responded promptly and provided clear, helpful solutions to resolve my issue. Their commitment to customer satisfaction was evident
                                    throughout the process. It's refreshing to receive such attentive and effective service, and it has certainly earned my loyalty
                                    as a customer. I highly recommend this site for anyone who values top-notch customer support.</p>
                                <span className="inline-block h-1 w-10 rounded bg-orange-400 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font
                                 tracking-wider text-sm uppercase underline">Krish Oberoi</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500 italic">Mumbai, India</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block
                                 border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Shopping on this site has been a delightful experience
                                    from start to finish. The website itself is user-friendly, with an intuitive design that made it easy for me to navigate and find
                                    what I was looking for. I was particularly impressed with the detailed product descriptions and high-quality images that provided
                                    a clear understanding of each item. The checkout process was straightforward and secure. My order arrived much sooner than I
                                    expected, and everything was in perfect condition. The products matched their descriptions and were of exceptional quality.</p>
                                <span className="inline-block h-1 w-10 rounded bg-orange-400 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font 
                                tracking-wider text-sm uppercase underline">Zoya Khan</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500 italic">Delhi, India</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block
                                 border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2922/2922510.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">The product range available on this site is truly 
                                    impressive. I was amazed by the extensive selection of items across various categories, which made it easy for me to find exactly 
                                    what I needed. The site offers a diverse array of products, from unique and high-end items to everyday essentials, all in one place.
                                     Each product listing is accompanied by detailed descriptions and customer reviews that helped me make informed purchasing decisions.
                                      The ease of browsing and the high-quality options available made my shopping experience enjoyable and efficient.</p>
                                <span className="inline-block h-1 w-10 rounded bg-orange-400 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font
                                 tracking-wider text-sm uppercase underline">Aditya Mahajan</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500 italic">Punjab, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial