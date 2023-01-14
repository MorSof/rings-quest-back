export class LevelResponseDto {
  id: number;
  playables: {
    type: string;
    subType: string;
    speed: number;
    duration: number;
    cooldown: number;
    destinationIds: number[];
    score: number;
  }[];
  scoreGoal: number;
  combo: {
    goal: number;
    rewards: {
      type: string;
      subType: string;
      odd: number;
      amount?: number;
    }[];
  };
  worldId: number;

  constructor(partial: Partial<LevelResponseDto>) {
    Object.assign(this, partial);
  }
}
