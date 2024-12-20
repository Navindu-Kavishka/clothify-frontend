import { api, PAYMENT_ENDPOINTS } from "../../config/apiConfig";
import { 
    CREATE_PAYMENT_FAILURE, 
    CREATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_SUCCESS, 
    UPDATE_PAYMENT_FAILURE, 
    UPDATE_PAYMENT_REQUEST,
    UPDATE_PAYMENT_SUCCESS 
} from "./ActionType";

export const createPayment = (orderId) => async (dispatch) => {
    dispatch({type: CREATE_PAYMENT_REQUEST});
    try {
        const {data} = await api.post(PAYMENT_ENDPOINTS.CREATE_PAYMENT(orderId), {});

        if (data.payment_link_url) {
            window.location.href = data.payment_link_url;
        }
        dispatch({type: CREATE_PAYMENT_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: CREATE_PAYMENT_FAILURE, payload: error.message});
    }
};

export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({type: UPDATE_PAYMENT_REQUEST});
    try {
        const {data} = await api.post(
            PAYMENT_ENDPOINTS.UPDATE_PAYMENT(reqData.paymentId, reqData.orderId)
        );
        dispatch({type: UPDATE_PAYMENT_SUCCESS, payload: data});
        console.log("updatePayment", data);
    } catch (error) {
        dispatch({type: UPDATE_PAYMENT_FAILURE, payload: error.message});
    }
};

// Updated with dispatch
export const verifyPayment = (paymentId) => async (dispatch) => {
    dispatch({type: UPDATE_PAYMENT_REQUEST});
    try {
        const {data} = await api.get(PAYMENT_ENDPOINTS.VERIFY_PAYMENT, {
            params: { payment_id: paymentId }
        });
        dispatch({type: UPDATE_PAYMENT_SUCCESS, payload: data});
        return data.verified;
    } catch (error) {
        dispatch({type: UPDATE_PAYMENT_FAILURE, payload: error.message});
        return false;
    }
};
