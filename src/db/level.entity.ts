import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WorldEntity } from './world.entity';

@Entity()
export class LevelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  playables: {
    type: string;
    subType: string;
    assetsIds: number[];
    speed: number;
    duration: number;
    cooldown: number;
    destinationIds: number[];
    score: number;
  }[];

  @Column()
  scoreGoal: number;

  @Column('json')
  combo: {
    goal: number;
    rewards: {
      type: string;
      subType: string;
      odd: number;
      amount?: number;
    }[];
  };

  @Column({ nullable: true, type: 'json' })
  stats: {
    assets: {
      countByIds: object;
      total: number;
    };
  };

  @Column({ nullable: true, type: 'float' })
  worldId: number;

  @ManyToOne((type) => WorldEntity, (world) => world.levels)
  world: WorldEntity;

  constructor(partial: Partial<LevelEntity>) {
    Object.assign(this, partial);
  }
}
