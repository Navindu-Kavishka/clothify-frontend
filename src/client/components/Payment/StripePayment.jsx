import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createPayment } from '../../../State/Paayment/Action';

const StripePayment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { orderId } = useParams();
    const { payment } = useSelector(state => state.payment);

    useEffect(() => {
        if(orderId) {
            dispatch(createPayment(orderId));
        }
    }, [orderId]);

    useEffect(() => {
        if(payment?.payment_link_url) {
            window.location.href = payment.payment_link_url;
        }
    }, [payment]);

    return (
        <div className="h-[90vh] flex flex-col justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            <h2 className="mt-5 text-2xl font-semibold">Processing Payment...</h2>
            <p className="mt-2 text-gray-600">Please wait while we redirect you to the payment gateway.</p>
        </div>
    );
};

export default StripePayment;
