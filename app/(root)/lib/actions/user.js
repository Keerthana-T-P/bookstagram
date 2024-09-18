import User from "../models/User";
import { connecttoDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async (id, first_name, last_name, image_url, email_addresses, username) => {
    try {
        await connecttoDB(); // Corrected to a function call
        const user = await User.findOneAndUpdate(
            { clerkId: id }, // Filter object
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    profilePhoto: image_url,
                    email: email_addresses[0].email_address,
                    username: username
                }
            },
            { upsert: true, new: true } // Options
        );
        await user.save(); // Save the updated or created user
        return user;
    } catch (error) {
        console.log(error);
    }
};
export const deleteuser=async(id)=>{
    try{
        await connecttoDB();
        await User.findOneAndDelete({clerkId:id});

    }catch(error){
        console.error(error);
    }
}
