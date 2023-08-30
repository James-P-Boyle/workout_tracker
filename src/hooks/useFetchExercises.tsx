import { useEffect, useState } from 'react'
import { WorkoutService } from '@/services/workout.service'
import { ExerciseData } from '@/App/AppContainer'

export function useFetchExercises() {
  const exerciseService = new WorkoutService()
  const [exercises, setExercises] = useState<ExerciseData[]>([])
  const [loading, setLoading] = useState(true)
  const [triggerFetch, setTriggerFetch] = useState(false)

  const fetchExercises = async () => {
    try {
      setLoading(true)
      const response = await exerciseService.getExercises()
      setExercises(response?.data)
    } catch (error) {
      console.log('Error fetching exercises:', error)
    } finally {
      setLoading(false)
      setTriggerFetch
    }
  }

  useEffect(() => {
    fetchExercises()
  }, [triggerFetch])

  return { exercises, loading, fetchExercises, setTriggerFetch }
}