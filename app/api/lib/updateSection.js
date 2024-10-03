import { Section } from "@/app/Models/models";


// Function to move an item from SourceModel to DestinationModel

export async function updateSection(itemId, sourceId, destinationId) {

    try {
        // Step 1: Find the source document and remove the item from it
        const sourceDoc = await Section.findById(sourceId);
        if (!sourceDoc) {
            throw new Error('Source document not found');
        }

        // Remove the item from the source model's items array
        sourceDoc.courses.pull(itemId);
        await sourceDoc.save(); // Save the updated source document

        // Step 2: Find or create the destination document
        const destinationDoc = await Section.findById(destinationId);
        if (!destinationDoc) {
            throw new Error('Source document not found');
        }

        // Add the item to the destination model's items array
        destinationDoc.courses.push(itemId);
        await destinationDoc.save(); // Save the updated destination document
    } catch (error) {
        console.error('Error moving item:', error);
    }
};

