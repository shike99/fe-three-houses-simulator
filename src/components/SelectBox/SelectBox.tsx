import React, { createRef, FC } from 'react'
import styles from './SelectBox.module.scss'

export interface SelectBoxOptionType {
  label: string
  value: string
}

interface PropTypes {
  defaultOption: SelectBoxOptionType
  options: SelectBoxOptionType[]
  selectedValue: SelectBoxOptionType['value']
  className: string
  handleChange(value: SelectBoxOptionType['value']): void
}

const SelectBox: FC<PropTypes> = ({ defaultOption, options, selectedValue, className, handleChange }) => {
  const selectBox = createRef<HTMLSelectElement>()

  return (
    <label className={`${styles.selectBox} ${className}`}>
      <select onChange={() => handleChange(selectBox.current?.value!)} ref={selectBox} value={selectedValue}>
        <option value={defaultOption.value}>{defaultOption.label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span />
    </label>
  )
}

export default SelectBox
