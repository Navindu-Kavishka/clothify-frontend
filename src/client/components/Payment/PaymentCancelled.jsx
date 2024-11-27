import { useNavigate } from 'react-router-dom';

const PaymentCancelled = () => {
    const navigate = useNavigate();

    return (
        <div className="h-[90vh] flex flex-col justify-center items-center">
            <div className="bg-red-100 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Payment Cancelled</h2>
                <p className="text-gray-600 mb-4">Your payment was cancelled. Please try again.</p>
                <button 
                    onClick={() => navigate('/cart')}
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                    Return to Cart
                </button>
            </div>
        </div>
    );
};

export default PaymentCancelled;
