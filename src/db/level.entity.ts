import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WorldEntity } from './world.entity';

@Entity()
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
        type: string;
        name: string;
        amount: number;
      }[];
    }[];
  };

  @Column({ nullable: true, type: 'json' })
  goals: {
    score: number;
    rewards: {
      type: string;
      name: string;
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

  constructor(partial: Partial<LevelEntity>) {
    Object.assign(this, partial);
  }
}
