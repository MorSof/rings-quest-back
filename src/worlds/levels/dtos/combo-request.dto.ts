import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { BarRequestDto } from './bar-request.dto';

export class ComboRequestDto {
  @ApiModelProperty({
    type: BarRequestDto,
    isArray: true,
  })
  bars: BarRequestDto[];
}
