export interface Playable {
  type: string;
  subType: string;
  speed: number;
  duration: number;
  cooldown: number;
  destinationIds: number[];
  score: number;
}
