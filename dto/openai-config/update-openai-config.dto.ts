import { IsString, IsBoolean, IsOptional, MaxLength } from 'class-validator';

export class UpdateOpenaiConfigDto {
  @IsString()
  @IsOptional()
  @MaxLength(255)
  assistantId?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  interpretationAssistantId?: string;

  @IsString()
  @IsOptional()
  apiKey?: string;

  @IsBoolean()
  @IsOptional()
  isEnabled?: boolean;
}
