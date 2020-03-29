import { Sex } from '@/types/sex'
import { SocialPosition } from '@/types/socialPosition'
import { Affiliation } from '@/types/affiliation'

export default class Character {
  public constructor(
    readonly id: number,
    readonly name: string,
    readonly englishName: string,
    readonly sex: Sex,
    readonly socialPosition: SocialPosition,
    readonly affiliation: Affiliation
  ) {}
}
