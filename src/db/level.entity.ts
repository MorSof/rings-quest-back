import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
