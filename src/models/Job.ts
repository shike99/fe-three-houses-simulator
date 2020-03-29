import { JobLevel } from '@/types/job'
import { Sex } from '@/types/sex'
import { SocialPosition } from '@/types/socialPosition'

export default class Job {
  public constructor(
    readonly id: number,
    readonly name: string,
    readonly level: JobLevel,
    readonly exclusiveUseOf?: string[],
    readonly genderRestriction?: Sex,
    readonly socialPositionRestriction?: SocialPosition
  ) {}
}
