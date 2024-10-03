import { Course } from "@/app/Models/models";

export async function updateIndicesEditCourse(newSectiton, prevSection, newIndex, oldIndex) {
    // If the new index and service are the same, no need to update
    if (newIndex === oldIndex && newSectiton === prevSection) return;

    // If the new index is lower, increment indices between [newIndex, oldIndex - 1]
    if (newSectiton === prevSection) {
        if (newIndex < oldIndex) {
            await Course.updateMany(
                { section: newSectiton, index: { $gte: newIndex, $lt: oldIndex } },
                { $inc: { index: 1 } }
            );
        }

        // If the new index is higher, decrement indices between [oldIndex + 1, newIndex]
        if (newIndex > oldIndex) {
            await Course.updateMany(
                { section: newSectiton, index: { $gt: oldIndex, $lte: newIndex } },
                { $inc: { index: -1 } }
            );
        }
    }


    // If the service has changed, adjust the previous service's indices
    if (newSectiton !== prevSection) {

        await Course.updateMany(
            { section: newSectiton, index: { $gte: newIndex } },
            { $inc: { index: 1 } }
        );

        await Course.updateMany(
            { section: prevSection, index: { $gt: oldIndex } },
            { $inc: { index: -1 } }
        );
    }

    return;
}
