import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

  @IsString({message:`brand field must be just a string`})
  readonly brand: string;

  @IsString()
  @MinLength(3)
  readonly model: string;
  
}
