import { IsNotEmpty, IsString, IsUUID, IsOptional, MaxLength, IsIn } from 'class-validator';

export class CreateVariableDto {
  @IsNotEmpty()
  @IsUUID()
  tenantId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @IsIn(['global', 'local', 'context'])
  type: string;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsOptional()
  @IsString()
  value?: string | null;
}
