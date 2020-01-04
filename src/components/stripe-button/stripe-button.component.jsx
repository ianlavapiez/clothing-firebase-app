import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_j1RnS5XIeHSYubv8A3b0mCPC00MJW3zfqT'
  const onToken = token => {
    console.log(token)
    alert('Payment successful!')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ₱${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
