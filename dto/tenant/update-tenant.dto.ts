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
  gatewayType?: string;

  @IsOptional()
  @IsBoolean()
  reservationImportEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  guestFeedbackEnabled?: boolean;

  @IsOptional()
  @IsBoolean()
  aiEnabled?: boolean;
}
