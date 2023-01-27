import { BarResponseDto } from '../bar/dtos/bar-response.dto';

export class ComboResponseDto {
  constructor(partial: Partial<ComboResponseDto>) {
    Object.assign(this, partial);
  }

  bars: BarResponseDto[];
}
