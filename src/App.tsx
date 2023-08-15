import Routing from "./routes/Routing"
import { useStyles } from "@/contexts/StyleContext"

function App() {

  const {mode} = useStyles()

  // Get user status, and username
  // Pass to Routing

  

  return (
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <Routing />
    </div>
  )
}

export default App
