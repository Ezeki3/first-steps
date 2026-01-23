import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      <ItemCounter
        name='Nintendo Switch'
        quantity={10}
      />

      <ItemCounter
        name='Pro controller'
        quantity={1}
      />

      <ItemCounter
        name='Nintendo Switch'
        quantity={2}
      />
    </>
  )
}