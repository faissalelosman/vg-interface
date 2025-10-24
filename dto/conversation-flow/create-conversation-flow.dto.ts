import { IsNotEmpty, IsString, IsUUID, IsOptional, MaxLength, IsObject } from 'class-validator';

export class CreateConversationFlowDto {
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsOptional()
  @IsString()
  description?: string | null;

}