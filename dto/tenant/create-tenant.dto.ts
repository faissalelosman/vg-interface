import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTenantDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  slug: string;
}
