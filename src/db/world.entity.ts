import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Level } from './level.entity';

@Entity()
export class World {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Level, (level) => level.world)
  levels: Level[];
}
