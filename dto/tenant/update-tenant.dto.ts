import { IsOptional, IsString, MaxLength, IsIn } from 'class-validator';

export class UpdateTenantDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  slug?: string;

  @IsOptional()
  @IsString()
  @IsIn(['SUPER_TENANT', 'NORMAL'])
  type?: string;
}
