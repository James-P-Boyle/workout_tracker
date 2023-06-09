import React, { createContext, useState, useContext, useEffect } from "react"

type Mode = "dark" | "light"

interface StyleProviderProps {
  children: React.ReactNode
}

interface StylesContextProps {
  mode: Mode
  toggleMode: () => void
}

export const StylesContext = createContext<StylesContextProps | undefined>(undefined)

export function useStyles() {
  const styles = useContext(StylesContext)
  if (!styles) {
    throw new Error("useStyles must be used within a StylesProvider")
  }
  return styles
}

export default function StylesProvider({ children }: StyleProviderProps) {
  const [mode, setMode] = useState<Mode>(() => {
    const storedMode = localStorage.getItem("mode")
    return storedMode === "dark" ? "dark" : "light"
  })

  useEffect(() => {
    localStorage.setItem("mode", mode)
  }, [mode])

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
  }

  const stylesContextValue: StylesContextProps = {
    mode,
    toggleMode,
  }

  return (
    <StylesContext.Provider value={stylesContextValue}>
      {children}
    </StylesContext.Provider>
  )
}