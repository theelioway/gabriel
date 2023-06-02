import React, { useEffect, useState } from "react"
import socketIOClient from "socket.io-client"
const ENDPOINT = "http://localhost:4001"

export const ClientComponent = (props) => {
  const [response, setResponse] = useState("")

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, {
      withCredentials: true,
    })
    socket.on("FromAPI", (data) => {
      setResponse(data)
    })

    return () => socket.disconnect()
  }, [])
  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  )
}

export default ClientComponent
