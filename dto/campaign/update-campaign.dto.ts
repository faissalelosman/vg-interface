import { IsOptional, IsString, IsIn, MaxLength } from 'class-validator';

export class UpdateCampaignDto {
  @IsOptional()
  @IsString()
  @IsIn(['TEMPLATE', 'MESSAGE'])
  type?: string;

  @IsOptional()
  @IsString()
  body?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  template?: string;
}
