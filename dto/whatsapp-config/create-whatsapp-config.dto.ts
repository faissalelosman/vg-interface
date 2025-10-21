import { IsUUID, IsString, IsNotEmpty, MaxLength } from 'class-validator';

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
}
