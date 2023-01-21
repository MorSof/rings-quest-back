export interface Playable {
  type: string;
  subType?: string;
  name: string;
  duration: number;
  cooldown: number;
  vertices: number[];
  score: number;
}
