import { IsNotEmpty, IsString, MaxLength, IsOptional, IsIn } from 'class-validator';

export class CreateTenantDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  slug: string;

  @IsOptional()
  @IsString()
  @IsIn(['SUPER_TENANT', 'NORMAL'])
  type?: string;
}
