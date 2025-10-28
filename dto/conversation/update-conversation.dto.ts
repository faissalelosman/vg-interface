import { IsOptional, IsString, IsEmail, MaxLength, IsDateString, IsEnum } from 'class-validator';

export enum ConversationStatus {
  NEW = 'new',
  CHECKED_IN = 'checked-in',
  ARCHIVED = 'archived',
}

export class UpdateConversationDto {
  @IsOptional()
  @IsString()
  @MaxLength(20)
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  guestName?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(255)
  guestEmail?: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  guestLanguage?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  roomNumber?: string;

  @IsOptional()
  @IsDateString()
  checkinDate?: string;

  @IsOptional()
  @IsDateString()
  checkoutDate?: string;

  @IsOptional()
  @IsEnum(ConversationStatus)
  status?: ConversationStatus;
}
