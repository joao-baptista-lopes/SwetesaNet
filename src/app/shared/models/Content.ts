export interface Content<T> {
    isNext: boolean;
    isPrev: boolean;
    isCurrent: boolean;
    data: T;
    id: string;
    created: string;
    createdBy: string;
    lastModified: string;
    lastModifiedBy: string;
    newStatus: string;
    status: string;
    newStatusColor: string;
    schemaId: string;
    schemaName: string;
    schemaDisplayName: string;
    statusColor: string;
  }