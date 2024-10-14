import { fetchCourses } from "@/app/lib/fetchData";
import ReviewForm from "./components/ReviewForm";

export async function generateMetadata() {
  return {
    title: 'Write a Review',
    description: `Submit your review for RPL Fast Track Australia. Share your experience and help others understand the value of our services.`,
    keywords: `RPL, Fast Track, Australia, write review, client review, feedback`,
    openGraph: {
      title: 'Write a Review for RPL Fast Track',
      description: `Share your feedback and experience with RPL Fast Track Australia. Your review helps us improve and provides valuable insights to others.`,
      url: 'https://rplfasttrack.com/write-review',
      images: [
        '/write-review.png', // Replace with a relevant image for writing reviews
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Write a Review at RPL Fast Track',
      description: `Submit your review for RPL Fast Track Australia and help others learn about our services.`,
      image: '/write-review.png',
      site: '@RPLFastTrack',
    },
  };
}

export default async function Page() {
  const availableCourses = await fetchCourses('api/courses');
  return (availableCourses &&
    <div>
      <ReviewForm availableCourses={availableCourses} />
    </div>
  );
}
