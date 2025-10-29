import { IsArray } from 'class-validator';

export class CreateConversationsBulkDto {
  @IsArray()
  conversations: any[];
}
