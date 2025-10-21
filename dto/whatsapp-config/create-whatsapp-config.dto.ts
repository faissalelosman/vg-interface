import { IsUUID, IsNotEmpty } from 'class-validator';

export class CreateWhatsappConfigDto {
  @IsUUID()
  @IsNotEmpty()
  tenantId: string;
}
