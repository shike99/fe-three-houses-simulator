import React, { useState } from 'react'
import Character from '@/models/Character'
import Job from '@/models/Job'
import { useCharactersAndJobs } from '@/hooks/useCharactersAndJobs'
import CharacterSelectBox from '@/components/CharacterSelectBox/CharacterSelectBox'
import JobSelectBox from '@/components/JobSelectBox/JobSelectBox'
import GrowthRateTable from '@/components/GrowthRateTable/GrowthRateTable'
import styles from './Simulator.module.scss'

function Simulator() {
  const { characters, jobs } = useCharactersAndJobs()

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const selectCharacter = (character: Character) => {
    setSelectedJob(null)
    setSelectedCharacter(character)
  }
  const selectJob = (job: Job) => setSelectedJob(job)

  return (
    <main className={styles.main}>
      <CharacterSelectBox
        className={styles.selectBox}
        characters={characters}
        selectedCharacter={selectedCharacter}
        selectCharacter={selectCharacter}
      />
      <JobSelectBox
        className={styles.selectBox}
        character={selectedCharacter}
        jobs={jobs}
        selectedJob={selectedJob}
        selectJob={selectJob}
      />
      {selectedCharacter && selectedJob && (
        <section className={styles.result}>
          <h2 className={styles.title}>
            {selectedCharacter.name} - {selectedJob.name}
          </h2>
          <GrowthRateTable characterGrowthRate={selectedCharacter.growthRate} jobGrowthRate={selectedJob.growthRate} />
          {selectedCharacter.skillCorrectedGrowthRate && (
            <GrowthRateTable
              characterGrowthRate={selectedCharacter.skillCorrectedGrowthRate}
              jobGrowthRate={selectedJob.growthRate}
            />
          )}
        </section>
      )}
    </main>
  )
}

export default Simulator
