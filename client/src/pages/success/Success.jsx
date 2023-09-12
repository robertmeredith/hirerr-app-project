import { useEffect, useLayoutEffect } from 'react'
import './Success.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import newRequest from '../../utils/newRequest'

const Success = () => {
  const navigate = useNavigate()

  const { search } = useLocation()
  const params = new URLSearchParams(search)

  const payment_intent = params.get('payment_intent')
  // console.log(payment_intent)

  useEffect(() => {
    const updateOrderStatus = async () => {
      try {
        await newRequest.put(`/orders`, { payment_intent })
        setTimeout(() => {
          navigate('/orders')
        }, 5000)
      } catch (error) {
        console.log(error)
      }
    }
    updateOrderStatus()
  }, [])

  return (
    <div className="success">
      <div className="container">
        <h1>Payment successful.</h1>
        <p>
          You are being re-directed to the orders page, please do not close this
          window.
        </p>
      </div>
    </div>
  )
}

export default Success
