export class LevelResponseDto {
  id: number;
  playables: {
    type: string;
    name: string;
    subType?: string;
    duration: number;
    cooldown: number;
    vertices: number[];
    score: number;
  }[];
  stats: {
    playables: {
      countByName: object;
      total: number;
    };
  };
  lives: number;
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
  goals: {
    score: number;
    rewards: {
      type: string;
      name: string;
      amount: number;
    }[];
  }[];
  worldId: number;

  constructor(partial: Partial<LevelResponseDto>) {
    Object.assign(this, partial);
  }
}
