import { IsOptional, IsUUID, IsInt, IsString } from 'class-validator';

export class UpdateConversationFlowConfigDto {
  @IsOptional()
  @IsUUID()
  activeConversationFlowId?: string;

  @IsOptional()
  @IsInt()
  timerValue?: number;

  @IsOptional()
  @IsString()
  template?: string;

  @IsOptional()
  @IsString()
  templateId?: string | null;
}
