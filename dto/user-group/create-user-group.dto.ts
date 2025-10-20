import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserGroupDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  groupId: string;
}
