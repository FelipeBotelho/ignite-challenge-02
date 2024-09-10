import { Link } from 'react-router-dom'
import { CheckoutArea, Container } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()
  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>
      <CheckoutArea>
        <div className="location">
          <MapPin size={22} weight="fill" />
          <span>Araraquara, SP</span>
        </div>
        <Link to={`checkout`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </CheckoutArea>
    </Container>
  )
}
