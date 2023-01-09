import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { World } from './world.entity';

@Entity()
export class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  playables: {
    type: string;
    subType: string;
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

  @Column({ nullable: true, type: 'float' })
  worldId: number;

  @ManyToOne((type) => World, (world) => world.levels)
  world: World;
}
