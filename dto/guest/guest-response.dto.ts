export class StayDto {
  checkinDate: string;
  checkoutDate: string;
}

export class GuestDto {
  guestName: string;
  guestEmail: string | null;
  phoneNumber: string;
  stays: StayDto[];
}

export class GuestsResponseDto {
  guests: GuestDto[];
  total: number;
}
