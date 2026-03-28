import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

export const initializeAdmin = async () => {
    try {
        const username = process.env.ADMIN_USERNAME || 'admin';
        const password = process.env.ADMIN_PASSWORD || 'password123';

        const adminExists = await User.findOne({ username });

        if (!adminExists) {
            console.log(`No admin found. Creating admin user: ${username}`);
            const admin = new User({
                username,
                password // Will be hashed by pre-save hook in User model
            });
            await admin.save();
            console.log('Admin user initialized successfully');
        } else {
            // Optional: Update password if the one in .env changed?
            // For now, just confirming it exists.
            console.log('Admin user already exists');
        }
    } catch (error) {
        console.error('Error during admin initialization:', error instanceof Error ? error.message : String(error));
    }
};
