import { IsNotEmpty, IsString, MaxLength, IsEmail, IsOptional, IsIn, IsBoolean } from 'class-validator';

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

  @IsNotEmpty()
  @IsString()
  @IsIn(['HOTEL', 'EVENT', 'COMMUNITY', 'CUSTOMER_INQUIRY'])
  businessType: string;

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
