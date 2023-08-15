import React, { createContext, useContext, useReducer, ReactNode } from "react"

type State = {
  activeTab: string
}

type Action = { 
  type: "SET_ACTIVE_TAB", 
  payload: string 
}

const WorkoutMainContext = createContext<{
  state: State
  dispatch: React.Dispatch<Action>
} | undefined>(undefined)

const initialState: State = {
  activeTab: "myWorkouts",
}

const workoutMainReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return { ...state, activeTab: action.payload }
    default:
      return state
  }
}

export const WorkoutMainProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(workoutMainReducer, initialState)

  return (
    <WorkoutMainContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutMainContext.Provider>
  )
}

export const useWorkoutMain = () => {
  const context = useContext(WorkoutMainContext)
  if (context === undefined) {
    throw new Error("useWorkoutMain must be used within a WorkoutMainProvider")
  }
  return context
}