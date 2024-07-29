import React, { useEffect, useState } from 'react';
import myContext from './myContext';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';

function myState(props) {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  const [products, setProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  // Add product
  const addProduct = async () => {
    if (products.title === null || products.price === null || products.imageUrl === null || products.category === null || products.description === null) {
      return toast.error("All fields are required");
    }

    const productRef = collection(fireDB, "products");
    setLoading(true);

    try {
      await addDoc(productRef, products);
      toast.success("Item added successfully");
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts("");
  };

  const [product, setProduct] = useState([]);

  // Get product data
  const getProductData = async () => {
    setLoading(true);

    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy('time')
      );

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  // Edit product
  const edithandle = (item) => {
    setProducts(item);
  };

  const updateProduct = async () => {
    setLoading(true);
    try {
      // Ensure time is serialized correctly
      const productWithSerializedTime = {
        ...products,
        time: products.time.toDate ? products.time.toDate().toISOString() : products.time,
      };

      await setDoc(doc(fireDB, "products", products.id), productWithSerializedTime);
      toast.success("Product updated successfully");
      getProductData();
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 800);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Delete product
  const deleteProduct = async (item) => {
    setLoading(true);

    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product deleted successfully");
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <myContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product, edithandle, updateProduct, deleteProduct }}>
      {props.children}
    </myContext.Provider>
  );
}

export default myState;

