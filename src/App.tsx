import Routing from "./routes/Routing"
import { useStyles } from "@/contexts/StyleContext"

function App() {

  const {mode} = useStyles()

  return (
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <Routing />
    </div>
  )
}

export default App
