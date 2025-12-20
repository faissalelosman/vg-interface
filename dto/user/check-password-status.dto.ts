import { IsNotEmpty, IsString } from 'class-validator';

export class CheckPasswordStatusDto {
  @IsNotEmpty()
  @IsString()
  token: string;
}
