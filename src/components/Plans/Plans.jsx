import React from 'react'
import '../Plans/Plans.css'
import { plansData } from '../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
    const amount = 249400;
    const currency = "INR";
    const receiptId = "qwsaq1";
    const PaymentHandler = async (e) => {
        const response = await fetch('http://localhost:8080/order', {
            method: "POST",
            body: JSON.stringify({
              amount,
              currency,
              receipt: receiptId,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const order = await response.json();
          console.log(order);
      
          var options = {
            key: "rzp_test_ITZ4caIigO9BBT", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            name: "FitClub", //your business name
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (response) {
              const body = {
                ...response,
              };
      
              const validateRes = await fetch(
                "http://localhost:8080/order/validate",
                {
                  method: "POST",
                  body: JSON.stringify(body),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              const jsonRes = await validateRes.json();
              console.log(jsonRes);
            },
            prefill: {
              //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
              name: "Pratik Prajapati", //your customer's name
              email: "kpratik23@gmail.com",
              contact: "7979096268", //Provide the customer's phone number for better conversion rates
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
          var rzp1 = new window.Razorpay(options);
          rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
          });
          rzp1.open();
          e.preventDefault();
        };      
    return (
        <div className='plans-container' id='plans'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>
            <div className="plans-prices">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>${plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits - </span>
                        </div>
                        <button className='btn' onClick={PaymentHandler}>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans