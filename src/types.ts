export interface Experience {
  image?: ImageMetadata; // Optional image URL for the experienc
  company: string;
  role: string;
  startDate: Date; 
  endDate?: Date | 'Now'; // 'Now' is a special case for ongoing experiences
  description: string;
  priority: number; 
}