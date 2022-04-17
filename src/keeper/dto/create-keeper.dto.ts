import { ApiProperty } from "@nestjs/swagger";

export class CreateKeeperDto {
    @ApiProperty({ description: '멤버Id' })
    memberId: number
}
