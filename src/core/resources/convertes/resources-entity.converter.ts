import { Injectable } from '@nestjs/common';
import { ResourceEntity } from '../../../db';
import { Resource } from '../models/resource.model';

@Injectable()
export class ResourcesEntityConverter {
  public convertFrom(resourceEntity: ResourceEntity): Resource {
    const { name, amount, type } = resourceEntity;
    return new Resource({ name, amount, type });
  }

  public convertTo(resource: Resource): ResourceEntity {
    const { name, amount, type } = resource;
    return new ResourceEntity({ name, amount, type });
  }
}
