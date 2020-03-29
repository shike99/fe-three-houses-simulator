import React, { useState, useEffect, createRef } from 'react'
import FetchCharacterGrowthRatesService from '@/services/FetchCharacterGrowthRatesService'
import FetchJobGrowthRatesService from '@/services/FetchJobGrowthRatesService'
import CharacterGrowthRate from '@/models/CharacterGrowthRate'
import JobGrowthRate from '@/models/JobGrowthRate'
import GrowthRate from '@/models/GrowthRate'

function Simulator() {
  const [characterGrowthRates, setCharacterGrowthRates] = useState<CharacterGrowthRate[]>([])
  const [jobGrowthRates, setJobGrowthRates] = useState<JobGrowthRate[]>([])

  useEffect(() => {
    const fetchCharacterGrowthRates = async () => {
      const characterGrowthRates = await FetchCharacterGrowthRatesService.call()
      setCharacterGrowthRates(characterGrowthRates)
    }
    const fetchJobGrowthRates = async () => {
      const jobGrowthRates = await FetchJobGrowthRatesService.call()
      setJobGrowthRates(jobGrowthRates)
    }
    Promise.all([fetchCharacterGrowthRates(), fetchJobGrowthRates()])
  }, [])

  const characterSelectBox = createRef<HTMLSelectElement>()
  const jobSelectBox = createRef<HTMLSelectElement>()
  const [selectedCharacterGrowthRate, setSelectedCharacterGrowthRate] = useState<CharacterGrowthRate | undefined>(
    undefined
  )
  const [selectedJobGrowthRate, setSelectedJobGrowthRate] = useState<JobGrowthRate | undefined>(undefined)
  const findCharacter = () => {
    const id = Number(characterSelectBox.current?.value)
    const selected = characterGrowthRates.find((characterGrowthRate) => characterGrowthRate.character.id === id)
    setSelectedCharacterGrowthRate(selected)
  }
  const findJob = () => {
    const id = Number(jobSelectBox.current?.value)
    const selected = jobGrowthRates.find((jobGrowthRate) => jobGrowthRate.job.id === id)
    setSelectedJobGrowthRate(selected)
  }

  const [growthRates, setGrowthRates] = useState<GrowthRate[]>([])

  useEffect(() => {
    if (!(selectedCharacterGrowthRate && selectedJobGrowthRate)) return

    if (selectedCharacterGrowthRate.character.englishName === 'cyril') {
      const selectedCharacters = characterGrowthRates.filter(
        (characterGrowthRate) => characterGrowthRate.character.englishName === 'cyril'
      )
      const selectedGrowthRates = selectedCharacters.map((character) =>
        GrowthRate.calculate(character.growthRate, selectedJobGrowthRate.growthRate)
      )
      setGrowthRates(selectedGrowthRates)
    } else {
      const selectedGrowthRate = GrowthRate.calculate(
        selectedCharacterGrowthRate.growthRate,
        selectedJobGrowthRate.growthRate
      )
      setGrowthRates([selectedGrowthRate])
    }
  }, [characterGrowthRates, selectedCharacterGrowthRate, selectedJobGrowthRate])

  return (
    <div className="Simulator">
      <select onChange={findCharacter} ref={characterSelectBox}>
        {characterGrowthRates.map((characterGrowthRate) => (
          <option key={characterGrowthRate.character.id} value={characterGrowthRate.character.id}>
            {characterGrowthRate.character.name}
          </option>
        ))}
      </select>
      <select onChange={findJob} ref={jobSelectBox}>
        {jobGrowthRates.map((jobGrowthRate) => (
          <option key={jobGrowthRate.job.id} value={jobGrowthRate.job.id}>
            {jobGrowthRate.job.name}
          </option>
        ))}
      </select>
      {growthRates.map((growthRate, index) => (
        <section key={index}>
          <h2>
            {selectedCharacterGrowthRate?.character.name} - {selectedJobGrowthRate?.job.name}
          </h2>
          <ul>
            <li>HP:{growthRate.hitPoint}</li>
            <li>力:{growthRate.strength}</li>
            <li>魔力:{growthRate.magicStrength}</li>
            <li>技:{growthRate.skill}</li>
            <li>速さ:{growthRate.agility}</li>
            <li>幸運:{growthRate.luck}</li>
            <li>守備:{growthRate.defense}</li>
            <li>魔防:{growthRate.magicDefense}</li>
            <li>魅力:{growthRate.charm}</li>
          </ul>
        </section>
      ))}
    </div>
  )
}

export default Simulator
