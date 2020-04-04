import React, { FC } from 'react'
import Character from '@/models/Character'
import Job from '@/models/Job'
import SelectBox, { SelectBoxOptionType } from '@/components/SelectBox/SelectBox'

interface PropTypes {
  character: Character | null
  jobs: Job[]
  selectedJob: Job | null
  className: string
  selectJob(job: Job): void
}

const JobSelectBox: FC<PropTypes> = ({ character, jobs, selectedJob, selectJob, className }) => {
  const defaultOption: SelectBoxOptionType = { label: '兵種を選択', value: '0' }
  const extractedJobs = character ? character.extractTakableJobs(jobs) : []
  const options: SelectBoxOptionType[] = extractedJobs.map((job) => ({
    label: job.name,
    value: job.id.toString(),
  }))
  const selectedValue = selectedJob ? selectedJob.id.toString() : defaultOption.value
  const handleChange = (value: string) => {
    const job = extractedJobs.find((job) => job.id === Number(value))
    selectJob(job!)
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

export default JobSelectBox
