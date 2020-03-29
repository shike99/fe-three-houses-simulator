import { Sex } from './sex'
import { SocialPosition } from './socialPosition'
import { Affiliation } from './affiliation'
import { JobLevel } from './job'

interface GrowthRate {
  readonly hitPoint: string
  readonly strength: string
  readonly magicStrength: string
  readonly skill: string
  readonly agility: string
  readonly luck: string
  readonly defense: string
  readonly magicDefense: string
  readonly charm: string
}

export interface CharacterApiResponse extends GrowthRate {
  readonly id: string
  readonly name: string
  readonly englishName: string
  readonly sex: Sex
  readonly socialPosition: SocialPosition
  readonly affiliation: Affiliation
}

export interface JobApiResponse extends GrowthRate {
  readonly id: string
  readonly name: string
  readonly level: JobLevel
  readonly exclusiveUseOf: string
  readonly genderRestriction: Sex | ''
  readonly socialPositionRestriction: SocialPosition | ''
}
