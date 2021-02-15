import React, { useState, useEffect } from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useHistory, history} from "react-router-dom"
import './Payment.css'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format'
import axios from './axios'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setCLientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payment/create?Total=${getBasketTotal(basket) * 100}`
            });
            setCLientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    const stripe = useStripe();
    const elements = useElements();

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replaceState('./orders')
        })
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">
                        {basket?.length} items
                        </Link>
                    )
                </h1>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>Himayathnagar</p>
                    <p>Hyderabad</p>
                </div>

            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rating={item.rating} />
                    ))}
                </div>
            </div>

            <div className="payment__section">

                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>

                <div className="payment_details">
                    {/* stripe will go here*/}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <p>
                                            Order Total : <strong>{value}</strong>
                                        </p>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Payment
