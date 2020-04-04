import { useState, useEffect } from 'react'
import FetchCharacterGrowthRatesService from '@/services/FetchCharacterGrowthRatesService'
import FetchJobGrowthRatesService from '@/services/FetchJobGrowthRatesService'
import Character from '@/models/Character'
import Job from '@/models/Job'

export function useCharactersAndJobs(): { characters: Character[]; jobs: Job[] } {
  const [characters, setCharacters] = useState<Character[]>([])
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const characters = await FetchCharacterGrowthRatesService.call()
      setCharacters(characters)
    }
    const fetchJobs = async () => {
      const jobs = await FetchJobGrowthRatesService.call()
      setJobs(jobs)
    }
    Promise.all([fetchCharacters(), fetchJobs()])
  }, [])

  return { characters, jobs }
}
