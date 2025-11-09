import { IsOptional, IsString, IsBoolean, MaxLength } from 'class-validator';

export class UpdateSlackConfigDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  teamId?: string;

  @IsOptional()
  @IsString()
  botToken?: string;

  @IsOptional()
  @IsBoolean()
  isEnabled?: boolean;
}
