import React, { FC } from 'react'
import Character from '@/models/Character'
import SelectBox, { SelectBoxOptionType } from '@/components/SelectBox/SelectBox'

interface PropTypes {
  characters: Character[]
  selectedCharacter: Character | null
  className: string
  selectCharacter(character: Character): void
}

const CharacterSelectBox: FC<PropTypes> = ({ characters, selectedCharacter, className, selectCharacter }) => {
  const defaultOption: SelectBoxOptionType = { label: 'キャラクターを選択', value: '0' }
  const options: SelectBoxOptionType[] = characters.map((character) => ({
    label: character.name,
    value: character.id.toString(),
  }))
  const selectedValue = selectedCharacter ? selectedCharacter.id.toString() : defaultOption.value
  const handleChange = (value: string) => {
    const character = characters.find((character) => character.id === Number(value))
    selectCharacter(character!)
  }
  return (
    <SelectBox
      className={className}
      defaultOption={defaultOption}
      options={options}
      selectedValue={selectedValue}
      handleChange={handleChange}
    />
  )
}

export default CharacterSelectBox
