import React from 'react';

const ShippingPolicy = () => {
    return (
        <div className="bg-gray-100 text-gray-800">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
                <h1 className="text-2xl font-bold mb-4">Order Policy</h1>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Order Cutoff Time:</h2>
                    <p>2:00 PM (GMT+05:30) India Standard Time (Kolkata)</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Handling Time:</h2>
                    <p>1-2 days</p>
                    <p>Fulfilled Monday to Saturday</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Transit Time:</h2>
                    <p>4-6 days</p>
                    <p>Shipped Monday to Saturday</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Shipping Cost:</h2>
                    <p>Free shipping for all products within India</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Change of Address:</h2>
                    <p>Yes, we can change the address before dispatching your order. We cannot change the delivery address once it is in transit.</p>
                    <p>If you need to change the delivery address, please contact us within 24 hours of placing your order at <a href="mailto:kapoorghanishtha2005@@gmail.com" className="text-blue-500">kapoorghanishtha2005@gmail.com</a> or call us at <a href="tel:+8837827095" className="text-blue-500">+91 8837827095</a>.</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Tracking:</h2>
                    <p>Once your order has been shipped, you will receive a tracking number, allowing you to track it until it is delivered to you.</p>
                    <p>You can track your order on our website in the footer section under "Track My Order."</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Cancellations:</h2>
                    <p>If you change your mind before receiving your order, we can accept cancellations at any time before the order has been dispatched. No cancellation charges apply if the order has not been dispatched.</p>
                    <p>Please contact us at <a href="mailto:kapoorghanishtha2005@gmail.com" className="text-blue-500">kapoorghanishtha2005@gmail.com</a> or WhatsApp us at <a href="tel:8837827095" className="text-blue-500">+918837827095</a>.</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Parcels Damaged In Transit & Insurance:</h2>
                    <p>If you receive a damaged product, you can return and exchange it within 5 days. We will cover the exchange courier charge.</p>
                    <p>Detailed delivery options are provided during checkout on all orders.</p>
                </div>

                <div className="mb-4">
                    <p>The stated price for the item and services is the total price the buyer must pay. This price includes all taxes and additional costs. The buyer will not bear any additional costs that the seller has not informed them about before the purchase.</p>
                </div>
            </div>
        </div>
    );
};

export default ShippingPolicy;
