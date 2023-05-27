import Routing from "./routes/Routing"
import AuthContextProvider from "./contexts/AuthContext"
import { useStyles } from "@/contexts/StyleContext"

function App() {


  const {mode} = useStyles()

  return (
    
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </div>

  )
}

export default App
