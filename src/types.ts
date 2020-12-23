export interface VideoInfo {
  id: string;
  link: string;
  recommendationCount?: number;
  thumbnailUrl: string;
  title: string;
  creator: string;
  description: string;
  durationSeconds: number;
  views: number;
}
