import { fetchCourses, fetchSection } from "./lib/fetchData";
export default async function sitemap() {
    // Fetch your dynamic data (like blog posts)
    const sections = await fetchSection('api/sections');
    const courses = await fetchCourses('/api/courses');

    return [
        {
            url: 'https://rplfasttrack.com',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 1,
        },

        {
            url: 'https://rplfasttrack.com/about',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.8,
        },

        {
            url: 'https://rplfasttrack.com/courses',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://rplfasttrack.com/benefits',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://rplfasttrack.com/contact',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.8,
        },

        {
            url: 'https://rplfasttrack.com/review',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.8,
        },

        {
            url: 'https://rplfasttrack.com/rpl',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.7,
        },


        ...courses.map((course) => ({
            url: `https://rplfasttrack.com/course/${course.link}`,
            lastModified: new Date(course.updatedAt),
            changeFrequency: 'yearly',
            priority: 0.8,
        })),
        // Dynamically include blog post routes with `[id]`
        ...sections.map((section) => ({
            url: `https://rplfasttrack.com/section/${section.link}`,
            lastModified: new Date(section.updatedAt),
            changeFrequency: 'yearly',
            priority: 0.6,
        })),
        {
            url: 'https://rplfasttrack.com/faq',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://rplfasttrack.com/privacy',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://rplfasttrack.com/refund',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://rplfasttrack.com/terms',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://rplfasttrack.com/write-review',
            lastModified: new Date('2024-10-14'),
            changeFrequency: 'yearly',
            priority: 0.5,
        },

    ];
}
