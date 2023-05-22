import Routing from "./routes/Routing"
import AuthContextProvider from "./contexts/AuthContext"

function App() {

  return (
    <>
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </>
  )
}

export default App
