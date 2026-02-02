import type { CSSProperties } from "react";

const firstaName = 'Fernando';
const lastName = 'Herrera';

const favoriteGames = ['Elden Ring', ' Smash', 'Metal Gear'];
const isActive = true;
const address = {
  zipCode: 'ABC-123',
  country: 'Canada'
}

const myStyles: CSSProperties = {
  backgroundColor: '#f08f8f',
  borderRadius: 20,
  padding: 10,
}

export function MyAwesomeApp() {

  return (
    <>
      <div>
        <h1 data-testid="first-name-title">{firstaName} </h1>
        <h3>{lastName} </h3>

        <p className="favorite-class">{favoriteGames.join(', ')}</p>

        <p>{2 + 2}</p>

        <h1>{isActive ? 'Activo' : 'No activo'} </h1>

        <p
          style={myStyles}
        >{JSON.stringify(address)}</p>
      </div>

    </>
  )
}