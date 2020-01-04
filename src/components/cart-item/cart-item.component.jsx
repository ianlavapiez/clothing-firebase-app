import React from 'react'

import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemSubDetailsContainer,
  CartItemImage
} from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} />
    <ItemDetailsContainer>
      <ItemSubDetailsContainer>{name}</ItemSubDetailsContainer>
      <ItemSubDetailsContainer>
        {quantity} x ₱{price}
      </ItemSubDetailsContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem
