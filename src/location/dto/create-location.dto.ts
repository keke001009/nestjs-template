import { ApiProperty } from "@nestjs/swagger";

export class CreateLocationDto {
    @ApiProperty({ description: "키퍼Id" })
    keeperId: number
    @ApiProperty({ description: "위치명" })
    name: string
    @ApiProperty({ description: "위도" })
    lat: number
    @ApiProperty({ description: "경도" })
    lng: number
}
