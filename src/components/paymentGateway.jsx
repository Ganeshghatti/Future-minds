import React, { useState } from 'react';
import axiosInstance from '../api/axios'; // Use your configured axios instance
import { useAuth } from '../hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PaymentGateway = ({ courseId, courseName, onPaymentSuccess, onPaymentError }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!user) {
      toast.error('Please login to make a payment');
      return;
    }

    if (!courseId) {
      toast.error('Course ID is required');
      return;
    }

    setLoading(true);

    try {


      const response = await axiosInstance.post(
        `/payment/subscribe/${user._id}`,
        {
          courseId: courseId,
        },
        {
            headers: {
              "Content-Type": "application/json",
            },
          withCredentials: true,
        }
      );

      console.log("Response from API payment:", response);
      
      const order = response.data.data.order;
      const prefillValues = response.data.data.prefill;

      // Configure Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZ_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Future Minds Institute",
        description: courseName || "Course Subscription",
        order_id: order.id,
        handler: async (razorpayResponse) => {
          console.log("Response from RazorPay:", razorpayResponse);
          
          try {
            await axiosInstance.post(
              `/payment/verify-payment/${user._id}`,
              {
                razorpay_order_id: razorpayResponse.razorpay_order_id,
                razorpay_payment_id: razorpayResponse.razorpay_payment_id,
                razorpay_signature: razorpayResponse.razorpay_signature,
                courseId: courseId,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              }
            );

            toast.success("Payment successful!");
            
            // Call success callback if provided
            if (onPaymentSuccess) {
              onPaymentSuccess(razorpayResponse);
              navigate("/dashboard", { replace: true });
              setTimeout(() => {
                window.location.reload();
              }, 100);
            } else {
              navigate("/", { replace: true });
              setTimeout(() => {
                window.location.reload();
              }, 100);
            }
          } catch (err) {
            console.error("Payment verification failed:", err);
            toast.error("Payment verification failed: " + (err.response?.data?.message || err.message));
            
            if (onPaymentError) {
              onPaymentError(err);
            }
          }
        },
        prefill: {
          name: prefillValues.name,
          email: prefillValues.email,
          contact: prefillValues.contact,
        },
        theme: {
          color: "#10b981", // emerald-500
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            console.log("Payment modal dismissed");
          }
        }
      };

      // Load Razorpay script if not already loaded
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
          const rzpay = new window.Razorpay(options);
          rzpay.open();
        };
        document.body.appendChild(script);
      } else {
        const rzpay = new window.Razorpay(options);
        rzpay.open();
      }

    } catch (err) {
      console.error("Error creating payment order:", err);
      toast.error("Failed to create payment order: " + (err.response?.data?.message || err.message));
      
      if (onPaymentError) {
        onPaymentError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    initiatePayment: handlePayment,
    loading,
    isDisabled: loading || !user || !courseId,
  };
};

export default PaymentGateway;