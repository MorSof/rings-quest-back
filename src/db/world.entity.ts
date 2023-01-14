import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { LevelEntity } from './level.entity';

@Entity()
export class WorldEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => LevelEntity, (level) => level.world)
  levels: LevelEntity[];

  constructor(partial: Partial<WorldEntity>) {
    Object.assign(this, partial);
  }
}
