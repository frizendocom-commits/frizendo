export type ReviewRating = 1 | 2 | 3 | 4 | 5;

export type ReviewPlatform = "Upwork" | "Fiverr";

export type Review = {
  id: string;
  quote: string;
  author: string;
  context: string;
  location?: string;
  platform: ReviewPlatform;
  rating: ReviewRating;
  verified: boolean;
};

export const FRIZENDO_REVIEWS: readonly Review[] = [
  {
    id: "google-ads",
    quote:
      "Frizendo set up and managed my Google Ads campaign professionally. Great communication, timely delivery, and quality work.",
    author: "Paid Search Client",
    context: "Google Ads campaign",
    platform: "Upwork",
    rating: 5,
    verified: true,
  },
  {
    id: "social-media-hungary",
    quote:
      "Frizendo did an excellent job setting up and optimizing all my social media accounts. Everything was handled professionally.",
    author: "Social Media Client",
    context: "Account setup & management",
    platform: "Fiverr",
    location: "Hungary",
    rating: 5,
    verified: true,
  },
  {
    id: "social-media-management",
    quote:
      "Great experience working with Frizendo. The communication was clear, the work was delivered on time, and everything was set up properly.",
    author: "Business Owner",
    context: "Social media management",
    platform: "Fiverr",
    location: "Hungary",
    rating: 5,
    verified: true,
  },
  {
    id: "youtube-thumbnails",
    quote:
      "Frizendo created some awesome thumbnails that were visually appealing with a very quick turnaround.",
    author: "Repeat Client",
    context: "YouTube thumbnails",
    platform: "Fiverr",
    location: "Australia",
    rating: 5,
    verified: true,
  },
  {
    id: "design-delivery",
    quote:
      "1000% recommend. Very fast delivery. Works well. Professional work.",
    author: "Repeat Client",
    context: "Design delivery",
    platform: "Fiverr",
    location: "United States",
    rating: 5,
    verified: true,
  },
  {
    id: "linkedin-branding",
    quote:
      "Frizendo did an excellent job optimizing my LinkedIn profile. Everything looks professional, well-structured, and aligned with personal branding.",
    author: "LinkedIn Client",
    context: "Personal branding",
    platform: "Fiverr",
    location: "United States",
    rating: 5,
    verified: true,
  },
];

export function getAverageRating(reviews: readonly Review[]): number {
  if (reviews.length === 0) {
    return 0;
  }

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);

  return Math.round((total / reviews.length) * 10) / 10;
}
