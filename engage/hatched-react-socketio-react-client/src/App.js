import React, { useState } from "react"
import ClientComponent from "./ClientComponent"

function App() {
  const [loadClient, setLoadClient] = useState(true)
  return (
    <>
      {/* LOAD OR UNLOAD THE CLIENT */}
      <button onClick={() => setLoadClient((prevState) => !prevState)}>
        TOGGLE
      </button>
      {/* SOCKET IO CLIENT*/}
      {loadClient ? <ClientComponent /> : null}
    </>
  )
}

export default App
