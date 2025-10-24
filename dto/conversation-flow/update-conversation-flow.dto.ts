import { IsOptional, IsString, MaxLength, IsObject } from 'class-validator';

export class UpdateConversationFlowDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsOptional()
  @IsObject()
  contextSchema?: Record<string, any> | null;
}
