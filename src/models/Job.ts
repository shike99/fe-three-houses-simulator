import { JobLevel } from '@/types/job'
import { Sex } from '@/types/sex'
import { SocialPosition } from '@/types/socialPosition'
import GrowthRate from './GrowthRate'

export default class Job {
  public constructor(
    readonly id: number,
    readonly name: string,
    readonly level: JobLevel,
    readonly growthRate: GrowthRate,
    readonly exclusiveUseOf?: string[],
    readonly genderRestriction?: Sex,
    readonly socialPositionRestriction?: SocialPosition
  ) {}
}
