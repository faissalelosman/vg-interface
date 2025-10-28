import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateConversationDto } from './create-conversation.dto';

export class CreateConversationsBulkDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateConversationDto)
  conversations: CreateConversationDto[];
}
