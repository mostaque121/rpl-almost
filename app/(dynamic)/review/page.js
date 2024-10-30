import ReviewCard from "@/app/components/card/ReviewCard";
import TopReviews from "@/app/components/content/TopReview";
import { fetchData, fetchReview } from "@/app/lib/fetchData";

export async function generateMetadata() {
  try {
    // Fetch reviews data from clients
    const reviews = await fetchData('/api/review');

    const totalReviews = reviews.length; // Total number of reviews
    const totalStars = reviews.reduce((acc, review) => acc + review.givenStar, 0); // Sum of all star ratings
    const averageRating = totalReviews > 0 ? (totalStars / totalReviews).toFixed(1) : '0.0'; // Calculate average rating

    return {
      title: 'Reviews',
      description: `Discover authentic client reviews and testimonials for RPL Fast Track Australia. We have received ${totalReviews} reviews with an average rating of ${averageRating} stars. See how our services have helped individuals gain recognition for their skills and advance their careers.`,
      keywords: `RPL, Fast Track, Australia, review, reviews, client reviews, testimonials, feedback`,
      openGraph: {
        title: 'Reviews',
        description: `Read real testimonials from our clients and learn how RPL Fast Track has positively impacted their career paths through recognition of prior learning. We have ${totalReviews} reviews with an average rating of ${averageRating} stars.`,
        url: 'https://rplfastrack.com/review',
        images: [
          '/review.png', // Replace with a relevant image for the reviews
        ],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Client Reviews at RPL Fast Track',
        description: `Explore testimonials from our clients! We have received ${totalReviews} reviews with an average rating of ${averageRating} stars. Find out how RPL Fast Track has helped them succeed in their career through recognition of prior learning.`,
        image: '/review.png',
        site: '@RPLFastTrack',
      },
    };
  } catch (error) {
    return {};
  }
}

export default async function Page() {
  const reviews = await fetchReview('api/review')
  return (reviews &&
    <div className="max-w-7xl mx-auto bg-light-gray px-4 sm:px-6 lg:px-8 py-12">

      <TopReviews reviews={reviews} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
}