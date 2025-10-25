import { IsOptional, IsString, IsBoolean, IsInt, MaxLength } from 'class-validator';

export class UpdateHandoverConfigDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  groupName?: string;

  @IsOptional()
  @IsInt()
  maxConversationsPerAgent?: number;

  @IsOptional()
  @IsString()
  waitingListMessage?: string;

  @IsOptional()
  @IsString()
  connectedMessage?: string;

  @IsOptional()
  @IsString()
  noAgentsAvailableMessage?: string;

  @IsOptional()
  @IsString()
  agentJoinedMessage?: string;

  @IsOptional()
  @IsBoolean()
  requireFeedback?: boolean;

  @IsOptional()
  @IsString()
  feedbackMessage?: string;

  @IsOptional()
  @IsBoolean()
  requireWrittenFeedback?: boolean;

  @IsOptional()
  @IsString()
  writtenFeedbackMessage?: string;

  @IsOptional()
  @IsBoolean()
  showConversationHistory?: boolean;

  @IsOptional()
  @IsBoolean()
  isEnabled?: boolean;
}
