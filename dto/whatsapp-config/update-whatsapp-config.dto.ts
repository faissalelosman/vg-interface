import { IsString, IsBoolean, IsOptional, MaxLength } from 'class-validator';

export class UpdateWhatsappConfigDto {
  @IsString()
  @IsOptional()
  @MaxLength(255)
  phoneNumberId?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  whatsappAccountId?: string;

  @IsString()
  @IsOptional()
  accessToken?: string;

  @IsBoolean()
  @IsOptional()
  isConnected?: boolean;

  @IsBoolean()
  @IsOptional()
  isEnabled?: boolean;
}
