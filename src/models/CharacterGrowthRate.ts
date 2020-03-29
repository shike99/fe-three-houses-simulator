import Character from './Character'
import GrowthRate from './GrowthRate'

export default class CharacterGrowthRate {
  public constructor(readonly character: Character, readonly growthRate: GrowthRate) {}
}
