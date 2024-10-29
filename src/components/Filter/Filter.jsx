// // import React, { useContext } from 'react'
// // import myContext from '../../context/data/myContext'

// // function Filter() {
// //     const context = useContext(myContext)
// //     const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product} = context

// //     return (
// //         <div>
// //            <div className=' container mx-auto px-4 mt-5 '>
// //                 <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
// //                     style={{
// //                         backgroundColor: mode === 'dark' ? '#282c34' : '',
// //                         color: mode === 'dark' ? 'white' : '',
// //                     }}>
// //                     <div className="relative">
// //                         <div className="absolute flex items-center ml-2 h-full">
// //                             <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                                 <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
// //                             </svg>
// //                         </div>
// //                         <input
// //                             type="text"
// //                             name="searchkey"
// //                             value={searchkey}
// //                             onChange={(e)=>setSearchkey(e.target.value)}
// //                             id="searchkey"
// //                             placeholder="Search here"
// //                             className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }} />
// //                     </div>
// //                     <div className="flex items-center justify-between mt-4">
// //                         <p className="font-medium">
// //                             Filters
// //                         </p>
// //                         <button className="px-4 py-2 bg-gray-50hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" style={{ color: mode === 'dark' ? 'white' : '' }}>
// //                             Reset Filter
// //                         </button>
// //                     </div>
// //                     <div>
// //                         <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
// //                             <select value={filterType} onChange={(e)=>setFilterType(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
// //                                 <option value="Category">Category</option>
// //                                 {product.map((item,index)=>{
// //                                     return(
// //                                         <option value={item.category}>{item.category}</option>
// //                                     )
// //                                 })}
// //                             </select>
// //                             <select value={filterPrice} onChange={(e)=>setFilterPrice(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
// //                                 <option value="Price">Price</option>
// //                                 {product.map((item, index)=>{
// //                                     return(
// //                                         <option value={item.price}>{item.price}</option>
// //                                     )
// //                                 })}
// //                             </select>

// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Filter



// // import React, { useContext } from 'react'
// // import myContext from '../../context/data/myContext'

// // function Filter() {
// //     const context = useContext(myContext)
// //     const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product} = context

// //     return (
// //         <div>
// //            <div className=' container mx-auto px-4 mt-5 '>
// //                 <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
// //                     style={{
// //                         backgroundColor: mode === 'dark' ? '#282c34' : '',
// //                         color: mode === 'dark' ? 'white' : '',
// //                     }}>
// //                     <div className="relative">
// //                         <div className="absolute flex items-center ml-2 h-full">
// //                             <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                                 <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
// //                             </svg>
// //                         </div>
// //                         <input
// //                             type="text"
// //                             name="searchkey"
// //                             value={searchkey}
// //                             onChange={(e)=>setSearchkey(e.target.value)}
// //                             id="searchkey"
// //                             placeholder="Search here"
// //                             className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }} />
// //                     </div>
// //                     <div className="flex items-center justify-between mt-4">
// //                         <p className="font-medium">
// //                             Filters
// //                         </p>
// //                         <button className="px-4 py-2 bg-gray-50hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" style={{ color: mode === 'dark' ? 'white' : '' }}>
// //                             Reset Filter
// //                         </button>
// //                     </div>
// //                     <div>
// //                         <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
// //                             <select value={filterType} onChange={(e)=>setFilterType(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
// //                                 <option value="Category">Category</option>
// //                                 {product.map((item, index) => (
// //                                     <option key={index} value={item.category}>{item.category}</option>
// //                                 ))}
// //                             </select>
// //                             <select value={filterPrice} onChange={(e)=>setFilterPrice(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
// //                                 <option value="Price">Price</option>
// //                                 {product.map((item, index) => (
// //                                     <option key={index} value={item.price}>{item.price}</option>
// //                                 ))}
// //                             </select>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Filter




// // import React, { useContext } from 'react';
// // import myContext from '../../context/data/myContext';

// // function Filter() {
// //     const context = useContext(myContext);
// //     const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product, setFilteredProduct } = context;

// //     const handleFilter = () => {
// //         let filteredProducts = product;

// //         if (filterType && filterType !== 'Category') {
// //             filteredProducts = filteredProducts.filter(item => item.category === filterType);
// //         }

// //         if (filterPrice && filterPrice !== 'Price') {
// //             filteredProducts = filteredProducts.filter(item => item.price === parseFloat(filterPrice));
// //         }

// //         if (searchkey) {
// //             filteredProducts = filteredProducts.filter(item => item.name.toLowerCase().includes(searchkey.toLowerCase()));
// //         }

// //         setFilteredProduct(filteredProducts);
// //     };

// //     const resetFilter = () => {
// //         setSearchkey('');
// //         setFilterType('Category');
// //         setFilterPrice('Price');
// //         setFilteredProduct(product);
// //     };

// //     return (
// //         <div className='container mx-auto px-4 mt-5'>
// //             <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
// //                 style={{
// //                     backgroundColor: mode === 'dark' ? '#282c34' : '',
// //                     color: mode === 'dark' ? 'white' : '',
// //                 }}>
// //                 <div className="relative">
// //                     <div className="absolute flex items-center ml-2 h-full">
// //                         {/* Search Icon */}
// //                     </div>
// //                     <input
// //                         type="text"
// //                         name="searchkey"
// //                         value={searchkey}
// //                         onChange={(e) => setSearchkey(e.target.value)}
// //                         id="searchkey"
// //                         placeholder="Search here"
// //                         className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
// //                         style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}
// //                         onKeyUp={handleFilter} // Filter on search input
// //                     />
// //                 </div>
// //                 <div className="flex items-center justify-between mt-4">
// //                     <p className="font-medium">Filters</p>
// //                     <button 
// //                         className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
// //                         style={{ color: mode === 'dark' ? 'white' : '' }}
// //                         onClick={resetFilter} // Reset filters
// //                     >
// //                         Reset Filter
// //                     </button>
// //                 </div>
// //                 <div>
// //                     <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
// //                         <select value={filterType} onChange={(e) => { setFilterType(e.target.value); handleFilter(); }} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
// //                             style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
// //                             <option value="Category">Category</option>
// //                             {product.map((item, index) => (
// //                                 <option key={index} value={item.category}>{item.category}</option>
// //                             ))}
// //                         </select>
// //                         <select value={filterPrice} onChange={(e) => { setFilterPrice(e.target.value); handleFilter(); }} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
// //                             style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
// //                             <option value="Price">Price</option>
// //                             {product.map((item, index) => (
// //                                 <option key={index} value={item.price}>{item.price}</option>
// //                             ))}
// //                         </select>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Filter;



// import React, { useContext, useEffect } from 'react';
// import myContext from '../../context/data/myContext';

// function Filter() {
//     const context = useContext(myContext);
//     const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product, setFilteredProduct } = context;

//     // Function to handle filtering
//     const handleFilter = () => {
//         let filteredProducts = product;

//         // Filter by category
//         if (filterType && filterType !== 'Category') {
//             filteredProducts = filteredProducts.filter(item => 
//                 item.category.toLowerCase() === filterType.toLowerCase()
//             );
//         }

//         // Filter by price
//         if (filterPrice && filterPrice !== 'Price') {
//             filteredProducts = filteredProducts.filter(item => 
//                 item.price === parseFloat(filterPrice)
//             );
//         }

//         // Filter by search keyword
//         if (searchkey) {
//             filteredProducts = filteredProducts.filter(item => 
//                 item.name.toLowerCase().includes(searchkey.toLowerCase())
//             );
//         }

//         // Update the filtered products in context
//         setFilteredProduct(filteredProducts);
//     };

//     // Reset the filters
//     const resetFilter = () => {
//         setSearchkey('');
//         setFilterType('Category');
//         setFilterPrice('Price');
//         setFilteredProduct(product); // Reset to full product list
//     };

//     return (
//         <div className='container mx-auto px-4 mt-5'>
//             <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
//                 style={{
//                     backgroundColor: mode === 'dark' ? '#282c34' : '',
//                     color: mode === 'dark' ? 'white' : '',
//                 }}>
//                 <div className="relative">
//                     <input
//                         type="text"
//                         name="searchkey"
//                         value={searchkey}
//                         onChange={(e) => { setSearchkey(e.target.value); handleFilter(); }}
//                         id="searchkey"
//                         placeholder="Search here"
//                         className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
//                         style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}
//                     />
//                 </div>
//                 <div className="flex items-center justify-between mt-4">
//                     <p className="font-medium">Filters</p>
//                     <button 
//                         className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
//                         style={{ color: mode === 'dark' ? 'white' : '' }}
//                         onClick={resetFilter} // Reset filters
//                     >
//                         Reset Filter
//                     </button>
//                 </div>
//                 <div>
//                     <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
//                         <select 
//                             value={filterType} 
//                             onChange={(e) => { setFilterType(e.target.value); handleFilter(); }} 
//                             className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
//                             style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
//                             <option value="Category">Category</option>
//                             {Array.from(new Set(product.map(item => item.category))).map((category, index) => (
//                                 <option key={index} value={category}>{category}</option>
//                             ))}
//                         </select>
//                         <select 
//                             value={filterPrice} 
//                             onChange={(e) => { setFilterPrice(e.target.value); handleFilter(); }} 
//                             className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
//                             style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
//                             <option value="Price">Price</option>
//                             {Array.from(new Set(product.map(item => item.price))).map((price, index) => (
//                                 <option key={index} value={price}>{price}</option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Filter;



import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Filter() {
    const context = useContext(myContext);
    const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product, setFilteredProduct } = context;

    // Function to handle filtering
    const handleFilter = () => {
        let filteredProducts = product;

        // Filter by category
        if (filterType && filterType !== 'Category') {
            filteredProducts = filteredProducts.filter(item => 
                item.category.toLowerCase() === filterType.toLowerCase()
            );
        }

        // Filter by price
        if (filterPrice && filterPrice !== 'Price') {
            filteredProducts = filteredProducts.filter(item => 
                item.price === parseFloat(filterPrice)
            );
        }

        // Filter by search keyword
        if (searchkey) {
            filteredProducts = filteredProducts.filter(item => 
                item.name.toLowerCase().includes(searchkey.toLowerCase())
            );
        }

        // Update the filtered products in context
        setFilteredProduct(filteredProducts);
    };

    // Reset the filters
    const resetFilter = () => {
        setSearchkey('');
        setFilterType('Category');
        setFilterPrice('Price');
        setFilteredProduct(product); // Reset to full product list
    };

    return (
        <div className='container mx-auto px-4 mt-5'>
            <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
                style={{
                    backgroundColor: mode === 'dark' ? '#282c34' : '',
                    color: mode === 'dark' ? 'white' : '',
                }}>
                <div className="relative">
                    <input
                        type="text"
                        name="searchkey"
                        value={searchkey}
                        onChange={(e) => { setSearchkey(e.target.value); handleFilter(); }}
                        id="searchkey"
                        placeholder="Search here"
                        className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
                        style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}
                    />
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p className="font-medium">Filters</p>
                    <button 
                        className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                        onClick={resetFilter} // Reset filters
                    >
                        Reset Filter
                    </button>
                </div>
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        <select 
                            value={filterType} 
                            onChange={(e) => { setFilterType(e.target.value); handleFilter(); }} 
                            className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                            style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
                            <option value="Category">Category</option>
                            {Array.from(new Set(product.map(item => item.category))).map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                        <select 
                            value={filterPrice} 
                            onChange={(e) => { setFilterPrice(e.target.value); handleFilter(); }} 
                            className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                            style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
                            <option value="Price">Price</option>
                            {Array.from(new Set(product.map(item => item.price))).map((price, index) => (
                                <option key={index} value={price}>{price}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
