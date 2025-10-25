import { IsNotEmpty, IsString, IsUUID, IsEmail, MaxLength } from 'class-validator';

export class CreateAgentDto {
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string;
}
