import { Playable } from './playable.model';
import { Combo } from './combo.model';
import { Stats } from './stats.model';

export class Level {
  id: number;
  playables: Playable[];
  scoreGoal: number;
  combo: Combo;
  worldId: number;
  stats?: Stats;

  constructor(partial: Partial<Level>) {
    Object.assign(this, partial);
    if (partial.stats) {
      return;
    }
    this.stats = this.playables.reduce((stats, playable) => {
      for (const assetId of playable.assetsIds) {
        const countByIds = stats.assets.countByIds;
        if (countByIds[assetId]) {
          countByIds[assetId] = countByIds[assetId] + 1;
        } else {
          countByIds[assetId] = 1;
        }
        stats.assets.total++;
      }
      return stats;
    }, new Stats());
  }
}
