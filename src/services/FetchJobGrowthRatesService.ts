import { fetchJson } from '@/libs/apiClient'
import { JobApiResponse } from '@/types/apiResponse'
import Job from '@/models/Job'
import GrowthRate from '@/models/GrowthRate'

export default class FetchJobGrowthRatesService {
  private constructor() {}

  public static async call(): Promise<Job[]> {
    const url = 'https://sheetdb.io/api/v1/kqstwgv6uhhj7?sheet=兵種成長率'
    const jobGrowthRates = await fetchJson<JobApiResponse[]>(url)
    return this.toModel(jobGrowthRates)
  }

  private static toModel(jobGrowthRates: JobApiResponse[]): Job[] {
    return jobGrowthRates.map(
      (jobGrowthRate) =>
        new Job(
          Number(jobGrowthRate.id),
          jobGrowthRate.name,
          jobGrowthRate.level,
          new GrowthRate(
            Number(jobGrowthRate.hitPoint),
            Number(jobGrowthRate.strength),
            Number(jobGrowthRate.magicStrength),
            Number(jobGrowthRate.skill),
            Number(jobGrowthRate.agility),
            Number(jobGrowthRate.luck),
            Number(jobGrowthRate.defense),
            Number(jobGrowthRate.magicDefense),
            Number(jobGrowthRate.charm)
          ),
          jobGrowthRate.exclusiveUseOf ? jobGrowthRate.exclusiveUseOf.split(',') : undefined,
          jobGrowthRate.genderRestriction ? jobGrowthRate.genderRestriction : undefined,
          jobGrowthRate.socialPositionRestriction ? jobGrowthRate.socialPositionRestriction : undefined
        )
    )
  }
}
