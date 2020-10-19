export interface ImagesResponse<T> {
  hasMore: boolean;
  page: number;
  pageCount: number;
  pictures: T[];
}
