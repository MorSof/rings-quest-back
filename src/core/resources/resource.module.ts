import { Module } from '@nestjs/common';
import { ResourcesEntityConverter } from './convertes/resources-entity.converter';
import { ResourcesDtoConverter } from './convertes/resources-dto.converter';

@Module({
  providers: [ResourcesEntityConverter, ResourcesDtoConverter],
  exports: [ResourcesEntityConverter, ResourcesDtoConverter],
})
export class ResourceModule {}
