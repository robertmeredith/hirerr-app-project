import './Pay.scss'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import newRequest from '../../utils/newRequest'
import CheckoutForm from '../../components/checkoutForm/CheckoutForm'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(
  'pk_test_51MTe2jJNO30F4rj9WM7KyDwvuyPICTBO1efgiQzvUuVuMY3YEx3qPubo4wzC14GxnMdPHv8NGmpoXhYWY3eG6klc00Pcdyzpsd'
)

const Pay = () => {
  const { id } = useParams()

  const [clientSecret, setClientSecret] = useState()

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const { data } = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        )
        return data
        // setClientSecret(data.clientSecret)
      } catch (error) {
        console.log(error)
      }
    }
    makeRequest().then((data) => setClientSecret(data.clientSecret))
  }, [id])

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div className="pay">
      <div className="container">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  )
}

export default Pay
