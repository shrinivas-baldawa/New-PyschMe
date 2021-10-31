import React from 'react'

function loadScript(src){
    return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = src
    script.onload = () => {
        resolve(true)
    }
    script.onerror = () => {
        resolve(false)
    }
    document.body.appendChild(script);
})
}

const __DEV__ = document.domain === "localhost"

export default function PaymentRazorPay() {

    async function displayRazorPay() {

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res){
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const data = await fetch('http://localhost:5000/payment/razorpay',{method: 'POST'}).then((t) => t.json())
        console.log(data)

        var options = {
            "key": __DEV__ ? 'rzp_test_Rxo3iSWRp7weUJ' : 'PRODUCTION_KEY',
            "currency":data.currency,
            "amount":data.amount.toString(),
            "order_id":data.id,
            "name": "Pysch.Me",
            "description": "Thank you for your payment.",
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9999999999"
            },
            "theme": {
                "color": "#3399cc"
            },
            "options": {
                "checkout": {
                  "method": {
                    "netbanking": "1",
                    "card": "1",
                    "upi": "0",
                    "wallet": "0"
                  }
                }
              }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div>
            <button onClick={displayRazorPay}>Pay</button>
        </div>
    )
}
