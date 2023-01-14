import { Playable } from './playable.model';
import { Combo } from './combo.model';

export class Level {
  id: number;
  playables: Playable[];
  scoreGoal: number;
  combo: Combo;
  worldId: number;

  constructor(partial: Partial<Level>) {
    Object.assign(this, partial);
  }
}
