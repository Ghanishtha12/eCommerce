import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import Modal from '../../components/modal/Modal';

function Cart() {
  const context = useContext(myContext);
  const { mode } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Cart Deleted");
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setTotalAmount(temp);
  }, [cartItems]);

  const shipping = 100;
  const grandTotal = shipping + totalAmount;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (!name || !address || !pincode || !phoneNumber) {
      return toast.error("All fields are required");
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
      })
    };

    var options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: grandTotal * 100,
      currency: "INR",
      name: "UrbanCart",
      description: "Order Payment",
      handler: async function (response) {
        toast.success('Payment Successful');
        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString(),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId
        };

        try {
          await addDoc(collection(fireDB, 'order'), orderInfo);
          dispatch(clearCart());
        } catch (error) {
          console.log(error);
        }
      },
      theme: { color: "#3399cc" }
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <Layout>
      <div
        className={`min-h-screen bg-gray-100 pt-5 ${
          cartItems.length === 0 ? 'mb-[105%]' : 'lg:mb-[60%]'
        }`}
        style={{
          backgroundColor: mode === 'dark' ? '#282c34' : '',
          color: mode === 'dark' ? 'white' : '',
        }}
      >
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>

        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Cart items section */}
            <div className="w-full md:w-2/3 mb-6 md:mb-0">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="mb-6 rounded-lg border drop-shadow-xl bg-white p-6 sm:flex sm:justify-start"
                    style={{
                      backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '',
                      color: mode === 'dark' ? 'white' : '',
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt="product"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2
                          className="text-lg font-bold"
                          style={{ color: mode === 'dark' ? 'white' : '' }}
                        >
                          {item.title}
                        </h2>
                        <p
                          className="mt-1 text-xs font-semibold"
                          style={{ color: mode === 'dark' ? 'white' : '' }}
                        >
                          INR {item.price}
                        </p>
                      </div>
                      <button onClick={() => deleteCart(item)} className="mt-4">
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No items in cart</p>
              )}
            </div>

            {/* Summary section */}
            {cartItems.length > 0 && (
              <div
                className="w-full md:w-1/3 rounded-lg border bg-white p-6 shadow-md"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <div className="mb-2 flex justify-between">
                  <p>Subtotal</p>
                  <p>INR {totalAmount}</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>INR {shipping}</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between mb-3">
                  <p className="text-lg font-bold">Total</p>
                  <p className="text-lg font-bold">INR {grandTotal}</p>
                </div>
                <Modal
                  name={name}
                  address={address}
                  pincode={pincode}
                  phoneNumber={phoneNumber}
                  setName={setName}
                  setAddress={setAddress}
                  setPincode={setPincode}
                  setPhoneNumber={setPhoneNumber}
                  buyNow={buyNow}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
