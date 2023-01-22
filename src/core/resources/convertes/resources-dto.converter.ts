import { Injectable } from '@nestjs/common';
import { Resource } from '../models/resource.model';
import { ResourceRequestDto } from '../dtos/resource-request.dto';
import { ResourceResponseDto } from '../dtos/resource-response.dto';

@Injectable()
export class ResourcesDtoConverter {
  public convertFrom(resourceRequestDto: ResourceRequestDto): Resource {
    const { name, amount, type } = resourceRequestDto;
    return new Resource({ name, amount, type });
  }

  public convertTo(resource: Resource): ResourceResponseDto {
    const { name, amount, type } = resource;
    return new ResourceResponseDto({ name, amount, type });
  }
}
