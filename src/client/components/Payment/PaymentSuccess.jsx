/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import { updatePayment } from '../../../State/Paayment/Action';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';
import AddressCard from '../AddressCard/AddressCard';

const PaymentSuccess = () => {

    const [paymentId, setPaymentId] = useState();
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const {orderId} = useParams();

    const dispatch = useDispatch();
    const {order} = useSelector(store=>store);

    useEffect(()=>{
        const urlParam = new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get('razorpay_payment_link_id'));
        setPaymentStatus(urlParam.get('razorpay_payment_link_status'));

    },[])

    useEffect(()=>{
        const data = {orderId,paymentId};
        dispatch(getOrderById(orderId));
        dispatch(updatePayment(data));

    },[orderId,paymentId])
    
    
  return (
    <div className='px-2 lg:px-36'>
      <div className='flex flex-col items-center justify-center'>

        <Alert
        variant='filled' 
        severity='success'
        sx={{mb:6, width:"fit-content"}}
        >
            <AlertTitle>Payment Success</AlertTitle>
            Congratulations! Your Order has been Placed.

        </Alert>

      </div>

      <OrderTracker activeStep={1}/>

      <Grid container className='spaace-y-5 py-5 pt-20'> 

        {[1,1].map((item) => <Grid container item xs={12} className='shadow-xl p-5 rounded-md'
        sx={{alignItems:"center", justifyContent:"space-between"}}
        >
            <Grid item xs={6}>

                <div className='flex items-center'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2024/11/0203211900MRN-4_Mens-T-Shirt_Fashion-Bug-Sri-Lanka.jpg" 
                    alt="" />

                    <div className='space-y-2 ml-5'>
                        <p>item.product.title</p>
                        <div className='space-x-5 opacity-50 text-xs font-semibold'> 

                            <span>Color: item.color</span>
                            <span>Size : item.size</span>
                            
                        </div>

                        <p className='text-sm font-semibold'>Brand : item.product.brand</p>
                        <p className='text-sm font-semibold'>LKR. item.price</p>

                    </div>
            
                </div>
            </Grid>

            <Grid item >
                <AddressCard address={order.order?.shippingAddressEntity} />
            </Grid>

        </Grid> )}

      </Grid>

    </div>
  )
}

export default PaymentSuccess
