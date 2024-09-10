import { NavigateFunction } from 'react-router-dom'
import { Item } from './reducer'
import { OrderInfo } from '../../pages/Checkout'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions =
  | {
      type: ActionTypes.ADD_TO_CART
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_FROM_CART
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: OrderInfo
        callback: NavigateFunction
      }
    }

export function addItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      item,
    },
  } satisfies Actions
}

export function removeItemAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function incrementItemQuantityAction(itemId: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function decrementItemQuantityAction(itemId: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function checkoutCartAction(
  order: OrderInfo,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies Actions
}
