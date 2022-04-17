import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateKeeperDto } from './create-keeper.dto';

export class UpdateKeeperDto extends PartialType(CreateKeeperDto) {
    @ApiProperty({ description: 'id' })
    id: number
}
