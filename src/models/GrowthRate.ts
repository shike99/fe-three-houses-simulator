export default class GrowthRate {
  public constructor(
    readonly hitPoint: number,
    readonly strength: number,
    readonly magicStrength: number,
    readonly skill: number,
    readonly agility: number,
    readonly luck: number,
    readonly defense: number,
    readonly magicDefense: number,
    readonly charm: number
  ) {}

  public static readonly SKILL_CORRECTION_VALUE = 20

  public static calculate(characterGrowthRate: GrowthRate, jobGrowthRate: GrowthRate): GrowthRate {
    return new GrowthRate(
      characterGrowthRate.hitPoint + jobGrowthRate.hitPoint,
      characterGrowthRate.strength + jobGrowthRate.strength,
      characterGrowthRate.magicStrength + jobGrowthRate.magicStrength,
      characterGrowthRate.skill + jobGrowthRate.skill,
      characterGrowthRate.agility + jobGrowthRate.agility,
      characterGrowthRate.luck + jobGrowthRate.luck,
      characterGrowthRate.defense + jobGrowthRate.defense,
      characterGrowthRate.magicDefense + jobGrowthRate.magicDefense,
      characterGrowthRate.charm + jobGrowthRate.charm
    )
  }
}
