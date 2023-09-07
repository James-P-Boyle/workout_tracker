import { useNavigate } from "react-router-dom"
import Button from "@/components/ui/Button"

export default function BackButton() {

  const navigate = useNavigate()

  return (
    <Button
      onClick={() => navigate(-1)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="currentColor" d="M15.269 28.146a.498.498 0 0 1-.36-.153L7.55 20.362a.498.498 0 0 1 0-.693l7.391-7.662a.5.5 0 1 1 .72.693l-7.056 7.315l7.024 7.284a.5.5 0 0 1-.36.847z"/><path fill="currentColor" d="M32.09 20.516H7.91a.5.5 0 0 1 0-1h24.18a.5.5 0 0 1 0 1z"/></svg>
    </Button>
  )
}