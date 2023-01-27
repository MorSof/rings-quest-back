import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WorldEntity } from './world.entity';
import { ResourceTypesEnum } from '../core/resources/models/resourceTypes.enum';
import { CurrencyNamesEnum } from '../core/resources/models/currencyNamesEnum';
import { BoosterNamesEnum } from '../core/resources/models/boosterNamesEnum';

@Entity({ name: 'levels' })
export class LevelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  playables: {
    type: string;
    name: string;
    subType?: string;
    duration: number;
    cooldown: number;
    vertices: number[];
    score: number;
  }[];

  @Column()
  lives: number;

  @Column('json')
  combo: {
    bars: {
      goal: number;
      rewards: {
        type: ResourceTypesEnum;
        name: BoosterNamesEnum | CurrencyNamesEnum;
        amount: number;
      }[];
    }[];
  };

  @Column({ nullable: true, type: 'json' })
  goals: {
    score: number;
    rewards: {
      type: ResourceTypesEnum;
      name: BoosterNamesEnum | CurrencyNamesEnum;
      amount: number;
    }[];
  }[];

  @Column({ nullable: true, type: 'json' })
  stats: {
    playables: {
      countByName: object;
      total: number;
    };
  };

  @Column({ nullable: true, type: 'float' })
  worldId: number;

  @ManyToOne((type) => WorldEntity, (world) => world.levels)
  world: WorldEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }

  constructor(partial: Partial<LevelEntity>) {
    Object.assign(this, partial);
  }
}
