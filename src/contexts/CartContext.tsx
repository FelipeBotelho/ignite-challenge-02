import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { cartReducer, Item, Order } from '../reducers/cart/reducer'
import { useNavigate } from 'react-router-dom'
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { OrderInfo } from '../pages/Checkout'

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItem: (itemId: string) => void
  decrementItem: (itemId: string) => void
  incrementItem: (itemId: string) => void
  checkout: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cart: [], orders: [] },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@02-desafio-coffe-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  const navigate = useNavigate()
  const { cart, orders } = cartState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }
  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate))
  }

  function incrementItem(itemId: Item['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItem(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem(
        '@02-desafio-coffe-delivery:cart-state-1.0.0',
        stateJSON,
      )
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
        orders,
        decrementItem,
        incrementItem,
        removeItem,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
