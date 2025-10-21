import { IsNotEmpty, IsString, MaxLength, IsEmail } from 'class-validator';

export class CreateTenantDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  slug: string;

  @IsNotEmpty()
  @IsEmail()
  adminEmail: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  adminName: string;
}
