import { fetchCourses, fetchSection } from "./lib/fetchData";
export default async function sitemap() {
    // Fetch your dynamic data (like blog posts)
    const sections = await fetchSection('api/sections');
    const courses = await fetchCourses('/api/courses');

    return [
        {
            url: 'https://rplfastrack.com',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 1,
        },

        {
            url: 'https://rplfastrack.com/about',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.8,
        },

        {
            url: 'https://rplfastrack.com/courses',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://rplfastrack.com/benefits',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://rplfastrack.com/contact',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.8,
        },

        {
            url: 'https://rplfastrack.com/review',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        {
            url: 'https://rplfastrack.com/rpl',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.7,
        },


        ...courses.map((course) => ({
            url: `https://rplfastrack.com/course/${course.link}`,
            lastModified: new Date(course.updatedAt),
            changeFrequency: 'yearly',
            priority: 0.8,
        })),
        // Dynamically include blog post routes with `[id]`
        ...sections.map((section) => ({
            url: `https://rplfastrack.com/section/${section.link}`,
            lastModified: new Date(section.updatedAt),
            changeFrequency: 'yearly',
            priority: 0.6,
        })),
        {
            url: 'https://rplfastrack.com/faq',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://rplfastrack.com/privacy',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://rplfastrack.com/refund',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://rplfastrack.com/terms',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://rplfastrack.com/write-review',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },

    ];
}
