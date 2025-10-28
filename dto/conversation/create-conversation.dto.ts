import { IsNotEmpty, IsString, IsEmail, IsOptional, MaxLength, IsDateString } from 'class-validator';

export class CreateConversationDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  guestName: string;

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

  @IsNotEmpty()
  @IsDateString()
  checkinDate: string;

  @IsNotEmpty()
  @IsDateString()
  checkoutDate: string;
}
