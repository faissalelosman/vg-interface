import { IsOptional, IsString, IsBoolean, MaxLength } from 'class-validator';

export class UpdateTeamsConfigDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  teamsTenantId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  clientId?: string;

  @IsOptional()
  @IsString()
  clientSecret?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  botId?: string;

  @IsOptional()
  @IsBoolean()
  isEnabled?: boolean;
}
