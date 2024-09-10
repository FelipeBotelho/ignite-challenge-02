import { produce } from 'immer'
import { Actions, ActionTypes } from './actions'
import { OrderInfo } from '../../pages/Checkout'

export interface Item {
  id: string
  quantity: number
}

export interface Order extends OrderInfo {
  id: number
  items: Item[]
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const alreadyAdded = draft.cart.find(
          (x) => x.id === action.payload.item.id,
        )
        if (alreadyAdded) alreadyAdded.quantity += action.payload.item.quantity
        else draft.cart.push(action.payload.item)
      })
    case ActionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        const idToRemove = draft.cart.findIndex(
          (x) => x.id === action.payload.itemId,
        )
        draft.cart.splice(idToRemove, 1)
      })
    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const item = draft.cart.find((x) => x.id === action.payload.itemId)
        if (item?.id) item.quantity += 1
      })
    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const item = draft.cart.find((x) => x.id === action.payload.itemId)
        if (item?.id && item.quantity > 1) item.quantity -= 1
      })
    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const order: Order = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }
        draft.orders.push(order)
        draft.cart = []
        action.payload.callback(`order/${order.id}/success`)
      })

    default:
      return state
  }
}
