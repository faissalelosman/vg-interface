import { IsEmail, IsNotEmpty, IsString, MinLength, IsUUID, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsUUID()
  tenantId?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  // Keep for backward compatibility
  @IsOptional()
  @IsString()
  username?: string;
}
