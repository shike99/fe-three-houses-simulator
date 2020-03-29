import { fetchJson } from '@/libs/apiClient'
import { CharacterApiResponse } from '@/types/apiResponse'
import Character from '@/models/Character'
import CharacterGrowthRate from '@/models/CharacterGrowthRate'
import GrowthRate from '@/models/GrowthRate'

export default class FetchCharacterGrowthRatesService {
  private constructor() {}

  public static async call(): Promise<CharacterGrowthRate[]> {
    const url = 'https://sheetdb.io/api/v1/kqstwgv6uhhj7?sheet=キャラ成長率'
    const characterGrowthRates = await fetchJson<CharacterApiResponse[]>(url)
    return this.toModel(characterGrowthRates)
  }

  private static toModel(characterGrowthRates: CharacterApiResponse[]): CharacterGrowthRate[] {
    return characterGrowthRates.map(
      (characterGrowthRate) =>
        new CharacterGrowthRate(
          new Character(
            Number(characterGrowthRate.id),
            characterGrowthRate.name,
            characterGrowthRate.englishName,
            characterGrowthRate.sex,
            characterGrowthRate.socialPosition,
            characterGrowthRate.affiliation
          ),
          new GrowthRate(
            Number(characterGrowthRate.hitPoint),
            Number(characterGrowthRate.strength),
            Number(characterGrowthRate.magicStrength),
            Number(characterGrowthRate.skill),
            Number(characterGrowthRate.agility),
            Number(characterGrowthRate.luck),
            Number(characterGrowthRate.defense),
            Number(characterGrowthRate.magicDefense),
            Number(characterGrowthRate.charm)
          )
        )
    )
  }
}
