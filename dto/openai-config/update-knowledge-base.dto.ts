import { IsObject, IsNotEmpty } from 'class-validator';

export class UpdateKnowledgeBaseDto {
  @IsObject()
  @IsNotEmpty()
  knowledgeBase: Record<string, any>;
}
