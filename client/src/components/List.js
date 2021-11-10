import react from "react";
import "./styles/list.css"

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
})}
const __DEV__ = document.domain === "localhost"

export default function List(props){

    async function displayRazorPayAbhishekSingh() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(!res){
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }
        const data = await fetch('/payment/razorpay',{method: 'POST'}).then((t) => t.json())
        console.log(data)
        var options = {
            "key": __DEV__ ? 'rzp_test_Rxo3iSWRp7weUJ' : 'PRODUCTION_KEY',
            "currency":data.currency,
            "amount":500000,
            "order_id":data.id,
            "name": "Pysch.Me",
            "description": "Thank you for your payment.",
            "handler": function (response){
                const payment_id = response.razorpay_payment_id;
                const order_id = response.razorpay_order_id;
                const signature = response.razorpay_signature;
                const doctor_name = 'Abhishek Singh';
                const doctor_email = 'abhisheksingh@gmail.com';
                const doctor_phone = '9090909090'
                const user_email = props.user_email
                const body = {payment_id, order_id, signature, doctor_name, doctor_email, doctor_phone, user_email};
                console.log(body);
                const putPaymentData = fetch("/payment/success",{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body:JSON.stringify(body)
                })
            },
            "prefill": {
                "name": props.name,
                "email": props.email,
                "contact": props.phone
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

    async function displayRazorPayShobhanaIyer() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(!res){
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }
        const data = await fetch('/payment/razorpay',{method: 'POST'}).then((t) => t.json())
        console.log(data)
        var options = {
            "key": __DEV__ ? 'rzp_test_Rxo3iSWRp7weUJ' : 'PRODUCTION_KEY',
            "currency":data.currency,
            "amount":300000,
            "order_id":data.id,
            "name": "Pysch.Me",
            "description": "Thank you for your payment.",
            "handler": function (response){
                const payment_id = response.razorpay_payment_id;
                const order_id = response.razorpay_order_id;
                const signature = response.razorpay_signature;
                const doctor_name = 'Shobhana Iyer';
                const doctor_email = 'iyershobhana@gmail.com';
                const doctor_phone = '8800332244'
                const user_email = props.user_email;
                const body = {payment_id, order_id, signature, doctor_name, doctor_email, doctor_phone,user_email};
                const putPaymentData = fetch("/payment/success",{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body:JSON.stringify(body)
                })
            },
            "prefill": {
                "name": props.name,
                "email": props.email,
                "contact": props.phone
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

    async function displayRazorPayGeetikaBabu() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(!res){
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }
        const data = await fetch('/payment/razorpay',{method: 'POST'}).then((t) => t.json())
        console.log(data)
        var options = {
            "key": __DEV__ ? 'rzp_test_Rxo3iSWRp7weUJ' : 'PRODUCTION_KEY',
            "currency":data.currency,
            "amount":300000,
            "order_id":data.id,
            "name": "Pysch.Me",
            "description": "Thank you for your payment.",
            "handler": function (response){
                const payment_id = response.razorpay_payment_id;
                const order_id = response.razorpay_order_id;
                const signature = response.razorpay_signature;
                const doctor_name = 'Geetika Babu';
                const doctor_email = 'gbabu1010@gmail.com';
                const doctor_phone = '7840335599'
                const user_email = props.user_email;
                const body = {payment_id, order_id, signature, doctor_name, doctor_email, doctor_phone,user_email};
                const putPaymentData = fetch("/payment/success",{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body:JSON.stringify(body)
                })
            },
            "prefill": {
                "name": props.name,
                "email": props.email,
                "contact": props.phone
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

    return(
        <div class="list-group" id="List">
            <table>
                <tr className="header">
                    <th>Counsellor Name</th>
                    <th>Fees (in INR)</th>
                    <th>Experience</th>
                </tr>
                <tr>
                    <th><button type="button" className="list-group-item list-group-item-action" onClick={displayRazorPayAbhishekSingh}>Dr. Abhishek Singh</button></th>
                    <th>5000</th>
                    <th>5 years</th>
                </tr>
                <tr>
                    <th><button type="button" className="list-group-item list-group-item-action" onClick={displayRazorPayShobhanaIyer}>Dr. Shobhana Iyer</button></th>
                    <th>3000</th>
                    <th>2 years</th>
                </tr>
                <tr>
                    <th><button type="button" className="list-group-item list-group-item-action" onClick={displayRazorPayGeetikaBabu}>Dr. Geetika Babu</button></th>
                    <th>6000</th>
                    <th>7 years</th>
                </tr>
            </table>

        </div>
    )
}