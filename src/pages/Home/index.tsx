import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { CoffeeList, Heading, Info, Intro, IntroContent } from './styles'
import { useTheme } from 'styled-components'
import { coffees } from '../../../data.json'
import { Card } from '../../components/Card'

export function Home() {
  const theme = useTheme()
  return (
    <div>
      <Intro>
        <IntroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.base.background}
                  style={{ backgroundColor: theme.product['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.base.background}
                  style={{ backgroundColor: theme.base['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.base.background}
                  style={{ backgroundColor: theme.product.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.base.background}
                  style={{ backgroundColor: theme.product.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src="/images/hero.svg" alt="Café do Coffee Delivery" />
        </IntroContent>

        <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
      </Intro>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
