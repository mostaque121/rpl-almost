import { Course } from "@/app/Models/models";

export async function updateIndicesUploadCourse(newIndex, sectionRef) {

    await Course.updateMany(
        { section: sectionRef, index: { $gte: newIndex } },
        { $inc: { index: 1 } }
    );
    return;
}
