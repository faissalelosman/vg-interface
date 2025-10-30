import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateCampaignDto {
  @IsNotEmpty()
  @IsString()
  body?: string;
}
