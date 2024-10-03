import { Section } from "@/app/Models/models";

export async function updateIndicesUpload(newIndex) {
    await Section.updateMany(
        { index: { $gte: newIndex } },
        { $inc: { index: 1 } }
    );
    return;
}
