import Job from './Job'
import GrowthRate from './GrowthRate'

export default class JobGrowthRate {
  public constructor(readonly job: Job, readonly growthRate: GrowthRate) {}
}
