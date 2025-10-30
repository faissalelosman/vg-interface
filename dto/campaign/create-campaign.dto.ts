import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateCampaignDto {
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  name: string;
}
