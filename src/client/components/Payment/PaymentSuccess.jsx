import { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import { updatePayment, verifyPayment } from '../../../State/Paayment/Action';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';
import AddressCard from '../AddressCard/AddressCard';

const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const {orderId} = useParams();
    const dispatch = useDispatch();
    const {order} = useSelector(store=>store);

    useEffect(()=>{
        const urlParam = new URLSearchParams(window.location.search);
        const payment_id = urlParam.get('payment_intent');
        setPaymentId(payment_id);
        
        if(payment_id) {
            dispatch(verifyPayment(payment_id))
                .then(verified => {
                    setPaymentStatus(verified ? 'success' : 'failed');
                });
        }
    },[]);

    useEffect(()=>{
        if(orderId && paymentId) {
            const data = {orderId, paymentId};
            dispatch(getOrderById(orderId));
            dispatch(updatePayment(data));
        }
    },[orderId, paymentId]);

    return (
        <div className='px-2 lg:px-36'>
            <div className='flex flex-col items-center justify-center'>
                <Alert
                    variant='filled'
                    severity={paymentStatus === 'success' ? 'success' : 'error'}
                    sx={{mb:6, width:"fit-content"}}
                >
                    <AlertTitle>
                        {paymentStatus === 'success' ? 'Payment Success' : 'Payment Status'}
                    </AlertTitle>
                    {paymentStatus === 'success' 
                        ? 'Congratulations! Your Order has been Placed.'
                        : 'Verifying your payment...'}
                </Alert>
            </div>

            <OrderTracker activeStep={paymentStatus === 'success' ? 1 : 0}/>

            <Grid container className='spaace-y-5 py-5 pt-20'>
                {order.order?.orderItemEntities.map((item) => (
                    <Grid container item xs={12} key={item.id} className='shadow-xl p-5 rounded-md'
                        sx={{alignItems:"center", justifyContent:"space-between"}}
                    >
                        <Grid item xs={6}>
                            <div className='flex items-center'>
                                <img className='w-[5rem] h-[5rem] object-cover object-top' 
                                    src={item.product?.imageUrl} 
                                    alt={item.product?.title} 
                                />
                                <div className='space-y-2 ml-5'>
                                    <p>{item.product?.title}</p>
                                    <div className='space-x-5 opacity-50 text-xs font-semibold'>
                                        <span>Color: {item.color}</span>
                                        <span>Size: {item.size}</span>
                                    </div>
                                    <p className='text-sm font-semibold'>Brand: {item.product?.brand}</p>
                                    <p className='text-sm font-semibold'>LKR. {item.price}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <AddressCard address={order.order?.shippingAddressEntity} />
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default PaymentSuccess
