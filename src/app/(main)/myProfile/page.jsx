"use client"
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import userImg from "@/assets/avatar.png"
import { useEffect, useState } from "react";


const MyProfile = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");


    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setImage(user.image || "");
        }
    }, [user]);
    const handleUpdate = async () => {
        try {
            const res = await authClient.updateUser({
                name,
                image,

            });
            console.log(res);
            setIsEditing(false);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="container mx-auto my-10 flex justify-center items-center">
            <div className="w-96 mx-auto py-10 px-5 sm:px-10 rounded-2xl text-white  bg-[#34B0BD]">
                <Image src={user?.image || userImg} alt="User" className="mx-auto" width={250} height={300} />
                {!isEditing && (
                    <>
                        <h2 className="font-bold text-xl text-center">Name: {user?.name}</h2>
                        <p className="font-semibold text-xl text-center">Email: {user?.email}</p>

                       <div className="flex justify-center">
                         <button className="px-4 py-2 rounded bg-[#F09633] mt-5" onClick={() => setIsEditing(true)}>Edit Profile</button>
                       </div>
                    </>
                )}

                {isEditing && (
                    <div className="mt-4 space-y-3">
                        <h2 className="mb-4 text-2xl font-semibold text-center">You can change</h2>
                         <label className="text-start font-bold">Name :</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 rounded bg-white text-black"
                            placeholder="Enter name"
                        />

                        <label className="text-start font-bold">Image URL :</label>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)}
                            className="w-full p-2 rounded bg-white text-black"
                            placeholder="Enter image URL"
                        />

                        <div className="flex gap-2 justify-center">
                            <button onClick={handleUpdate} className=" bg-[#F09633] px-4 py-2 rounded">
                                Save
                            </button>

                            <button onClick={() => setIsEditing(false)} className="bg-gray-600 px-4 py-2 rounded">
                                Cancel
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default MyProfile;