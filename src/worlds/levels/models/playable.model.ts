export interface Playable {
  type: string;
  subType: string;
  assetsIds: number[];
  speed: number;
  duration: number;
  cooldown: number;
  destinationIds: number[];
  score: number;
}
