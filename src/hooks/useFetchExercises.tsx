import { useEffect, useState } from 'react'
import { WorkoutService } from '@/services/workout.service'
import { Exercise } from '@/types'

export function useFetchExercises() {
  const exerciseService = new WorkoutService()
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)

  const fetchExercises = async () => {
    try {
      setLoading(true)
      const response = await exerciseService.getExercises()
      setExercises(response?.data)
    } catch (error) {
      console.log('Error fetching exercises:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchExercises()
  }, [])

  console.log('exer!!',exercises)
  return { exercises, loading, fetchExercises, setExercises }
}
