'use server'
import { revalidatePath, revalidateTag } from "next/cache";

export async function getCoursesAndSections() {
    const nextUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!nextUrl) {
        console.error('NEXT_PUBLIC_API_URL is not set.');
        return null;
    }

    try {
        // Fetch courses and sections concurrently
        const [coursesRes, sectionsRes] = await Promise.all([
            fetch(`${nextUrl}/api/courses`, { next: { tags: 'course' } }),
            fetch(`${nextUrl}/api/sections`, { next: { tags: 'section' } })
        ]);

        // Check if both requests were successful
        if (!coursesRes.ok || !sectionsRes.ok) {
            throw new Error('Failed to fetch courses or sections');
        }

        const courses = await coursesRes.json();
        const sections = await sectionsRes.json();

        return { courses, sections };
    } catch (error) {
        console.error('Error fetching courses and sections:', error);
        return null;
    }
}

export async function revalidateAfterUploadSection() {
    revalidateTag('section')
}

export async function revalidateAfterUploadCourse(sectionLink) {
    revalidateTag('section')
    revalidatePath(`/admin/${sectionLink}`);
    revalidatePath(`/section/${sectionLink}`);
}

export async function revalidateAfterEditCourse(prevCourseLink, prevSectionLink, newSectionLink) {
    revalidateTag('section')
    revalidatePath(`/admin/${prevSectionLink}`);
    revalidatePath(`/admin/${newSectionLink}`);
    revalidatePath(`/section/${prevSectionLink}`);
    revalidatePath(`/section/${newSectionLink}`);
    revalidatePath(`/courses/${prevCourseLink}`);
    revalidatePath(`admin/courses/${prevCourseLink}`);
}

export async function revalidateAfterDeleteCourse(courseLink, sectionLink) {
    revalidatePath(`/courses`);
    revalidatePath(`/admin/courses`);
    revalidatePath(`/admin/upload/courses/section`);
    revalidatePath(`/admin/upload/courses/course`);
    revalidatePath(`/admin/${sectionLink}`);
    revalidatePath(`/section/${sectionLink}`);
    revalidatePath(`/courses/${courseLink}`);
    revalidatePath(`admin/courses/${courseLink}`);
}


export async function revalidateAfterReview() {
    revalidatePath(`/admin/review/pending`);
}
export async function revalidateAfterEditReview() {
    revalidateTag('review');
}

export async function revalidateAfterUploadHappyClient() {
    revalidateTag('happyClient');
}

export async function revalidateAfterResponse() {
    revalidatePath('/admin/response');
}

export async function revalidateUsers() {
    revalidatePath('/admin/users');
}