import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class WhatsappMessageDto {
  @IsNotEmpty()
  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  mediaUrl?: string;

  @IsOptional()
  @IsString()
  mediaType?: string;
}
