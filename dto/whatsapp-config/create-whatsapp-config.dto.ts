import { IsUUID, IsString, IsBoolean, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateWhatsappConfigDto {
  @IsUUID()
  @IsNotEmpty()
  tenantId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  phoneNumberId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  whatsappAccountId: string;

  @IsString()
  @IsNotEmpty()
  accessToken: string;

  @IsBoolean()
  @IsOptional()
  isConnected?: boolean;

  @IsBoolean()
  @IsOptional()
  isEnabled?: boolean;
}
