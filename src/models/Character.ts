import { Sex } from '@/types/sex'
import { SocialPosition } from '@/types/socialPosition'
import { Affiliation } from '@/types/affiliation'
import GrowthRate from './GrowthRate'
import Job from './Job'

export default class Character {
  public constructor(
    readonly id: number,
    readonly name: string,
    readonly englishName: string,
    readonly sex: Sex,
    readonly socialPosition: SocialPosition,
    readonly affiliation: Affiliation,
    readonly growthRate: GrowthRate
  ) {}

  get skillCorrectedGrowthRate(): GrowthRate | undefined {
    const skillCorrectedGValue = GrowthRate.SKILL_CORRECTION_VALUE
    if (this.englishName === 'cyril') {
      return new GrowthRate(
        this.growthRate.hitPoint + skillCorrectedGValue,
        this.growthRate.strength + skillCorrectedGValue,
        this.growthRate.magicStrength + skillCorrectedGValue,
        this.growthRate.skill + skillCorrectedGValue,
        this.growthRate.agility + skillCorrectedGValue,
        this.growthRate.luck + skillCorrectedGValue,
        this.growthRate.defense + skillCorrectedGValue,
        this.growthRate.magicDefense + skillCorrectedGValue,
        this.growthRate.charm + skillCorrectedGValue
      )
    } else {
      return undefined
    }
  }

  public extractTakableJobs(jobs: Job[]): Job[] {
    return jobs.filter((job) => {
      if (job.exclusiveUseOf) {
        return job.exclusiveUseOf.includes(this.englishName)
      }
      if (job.genderRestriction) {
        return job.genderRestriction === this.sex
      }
      if (job.socialPositionRestriction) {
        return job.socialPositionRestriction === this.socialPosition
      }
      return true
    })
  }
}
