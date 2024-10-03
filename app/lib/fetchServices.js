// app/lib/fetchServices.js
import { Service } from '@/app/Models/models';
import dbConnect from './mongodb';

export async function fetchAllServices() {
    try {
        // Connect to the database
        await dbConnect();

        // Fetch all services and populate the 'certificates' field
        const services = await Service.find({})
            .sort({ index: 1 })
            .populate({
                path: 'certificates',
                select: 'link title index',
                options: { sort: { index: 1 } },
            });

        return services;
    } catch (error) {
        console.error('Error fetching services:', error);
        throw new Error('Failed to fetch services');
    }
}
