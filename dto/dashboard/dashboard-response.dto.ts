export class ConversationDataPointDto {
  date: string;
  count: number;
}

export class DashboardResponseDto {
  openConversations: number;
  conversationsWithAgent: number;
  activeAgents: number;
  conversationsWaitingForAgent: number;
  conversationsOverTime: ConversationDataPointDto[];
  meanCommunicationTimeMinutes: number;
  dateRange: {
    startDate: string;
    endDate: string;
  };
}
