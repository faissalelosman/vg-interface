import { IsOptional, IsString, MaxLength, IsIn, IsBoolean } from 'class-validator';

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

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  @IsIn(['MS Teams', 'Slack'])
  gateway_type?: string;

  @IsOptional()
  @IsBoolean()
  reservation_import_enabled?: boolean;

  @IsOptional()
  @IsBoolean()
  guest_feedback_enabled?: boolean;

  @IsOptional()
  @IsBoolean()
  ai_enabled?: boolean;
}
