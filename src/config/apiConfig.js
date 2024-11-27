import axios from "axios";

export const API_BASE_URL = 'http://localhost:8080';

const jwt = localStorage.getItem("jwt");

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
    }
})

// Add Stripe payment endpoints
export const PAYMENT_ENDPOINTS = {
    CREATE_PAYMENT: (orderId) => `/api/payments/${orderId}`,
    UPDATE_PAYMENT: (paymentId, orderId) => `/api/payments?payment_id=${paymentId}&order_id=${orderId}`,
    VERIFY_PAYMENT: `/api/payments/verify`
};
