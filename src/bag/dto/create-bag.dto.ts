import { IsNotEmpty } from "class-validator";

export class CreateBagDto {
    @IsNotEmpty()
    name: String
}
