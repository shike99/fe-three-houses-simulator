import React, { FC } from 'react'
import GrowthRate from '@/models/GrowthRate'
import styles from './GrowthRateTable.module.scss'

interface PropTypes {
  characterGrowthRate: GrowthRate
  jobGrowthRate: GrowthRate
}

const GrowthRateTable: FC<PropTypes> = ({ characterGrowthRate, jobGrowthRate }) => {
  const growthRate = GrowthRate.calculate(characterGrowthRate, jobGrowthRate)

  return (
    <ul className={styles.growthRate}>
      <li>
        <dt>HP</dt>
        <dd>
          <span>{growthRate.hitPoint}</span>
          <span className={styles.breakdown}>
            ({characterGrowthRate.hitPoint} + {jobGrowthRate.hitPoint})
          </span>
        </dd>
      </li>
      <li>
        <dt>力</dt>
        <dd>
          <span>{growthRate.strength}</span>
          <span className={styles.breakdown}>
            ({characterGrowthRate.strength} + {jobGrowthRate.strength})
          </span>
        </dd>
      </li>
      <li>
        <dt>魔力</dt>
        <dd>
          <span>{growthRate.magicStrength}</span>
          <span className={styles.breakdown}>
            ({characterGrowthRate.magicStrength} + {jobGrowthRate.magicStrength})
          </span>
        </dd>
      </li>
      <li>
        <dt>技</dt>
        <dd>
          <span>{growthRate.skill}</span>
          <span className={styles.breakdown}>
            ({characterGrowthRate.skill} + {jobGrowthRate.skill})
          </span>
        </dd>
      </li>
      <li>
        <dt>速さ</dt>
        <dd>
          <span>{growthRate.agility}</span>
          <span className={styles.breakdown}>
            ({characterGrowthRate.agility} + {jobGrowthRate.agility})
          </span>
        </dd>
      </li>
      <li>
        <dt>幸運</dt>
        <dd>
          <span>{growthRate.luck}</span>
          <span className={styles.breakdown}>
            ({characterGrowthRate.luck} + {jobGrowthRate.luck})
          </span>
        </dd>
      </li>
      <li>
        <dt>守備</dt>
        <dd>
          <span>{growthRate.defense}</span>
          <span className={styles.breakdown}>
            ({characterGrowthRate.defense} + {jobGrowthRate.defense})
          </span>
        </dd>
      </li>
      <li>
        <dt>魔防</dt>
        <dd>
          <span>{growthRate.magicDefense}</span>
          <span className={styles.breakdown}>
            ({characterGrowthRate.magicDefense} + {jobGrowthRate.magicDefense})
          </span>
        </dd>
      </li>
      <li>
        <dt>魅力</dt>
        <dd>
          <span>{growthRate.charm}</span>
          <span className={styles.breakdown}>
            ({characterGrowthRate.charm} + {jobGrowthRate.charm})
          </span>
        </dd>
      </li>
    </ul>
  )
}

export default GrowthRateTable
