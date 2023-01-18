export class Stats {
  assets: {
    countByIds: object;
    total: number;
  };

  constructor() {
    this.assets = {
      countByIds: {},
      total: 0,
    };
  }
}
