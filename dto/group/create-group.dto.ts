import { IsNotEmpty, IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}
