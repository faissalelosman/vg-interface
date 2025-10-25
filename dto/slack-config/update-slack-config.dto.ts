import { IsOptional, IsString, IsBoolean, MaxLength } from 'class-validator';

export class UpdateSlackConfigDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  clientId?: string;

  @IsOptional()
  @IsString()
  clientSecret?: string;

  @IsOptional()
  @IsString()
  signingSecret?: string;

  @IsOptional()
  @IsBoolean()
  isEnabled?: boolean;
}
