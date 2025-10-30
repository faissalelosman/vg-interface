import { IsIn, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateCampaignDto {
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['TEMPLATE', 'MESSAGE'])
  type?: string;
  
  @IsOptional()
  @IsString()
  @MaxLength(30)
  template?: string;
}
