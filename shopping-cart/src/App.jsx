import { Route } from 'wouter'
import './App.scss'
import Products from './components/Products'
import Header from './components/Header'
import CartProvider from './context/CartContext'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <CartProvider>
        <main>
          <Header />
          <Route path="/" component={Products} />
          {<Route path="/cart" component={Cart} />}
        </main>
      </CartProvider>
    </>
  )
}

export default App
