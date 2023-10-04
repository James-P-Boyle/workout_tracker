export interface Profile {
  firstName: string
  lastName: string
  age: number
  weight: number
  height: number
  avatar: string
  username: string
}

export interface Exercise {
  bodySplit: BodySplitType
  action: ActionType
  equipment: EquipmentType
  exerciseName: string
  instruction: string
  id?: string
}

export interface WorkoutExercise {
  id: string
  exercise: Exercise[]
}

export interface FullWorkout {
  id: string
  workoutName: string
  createdAt: string
  workoutExercises: Exercise[]
}

export enum EquipmentType {
  DUMBBELL = 'dumbbell',
  BARBELL = 'barbell',
  BODYWEIGHT = 'bodyweight',
}

export enum ActionType {
  PUSH = 'push',
  PULL = 'pull',
}

export enum BodySplitType {
  UPPER = 'upper',
  LOWER = 'lower',
}

export type Workout = {
  id: string
  workoutName: string
  createdAt?: string
}

export interface WorkoutExerciseData {
  workoutId: string
  exerciseId: string
  exerciseName?: string
}

