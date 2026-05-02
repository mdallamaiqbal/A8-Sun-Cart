 "use client"
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import userImg from "@/assets/avatar.png"


const MyProfile = () => {
      const { data: session } = authClient.useSession();
      const user = session?.user;
    return (
        <div className="container mx-auto my-10 flex justify-center items-center">
            <div className="w-96 mx-auto py-10 px-5 sm:px-10 rounded-2xl text-white text-center bg-[#34B0BD]">
              <Image src={user?.image || userImg} alt="User" className="mx-auto" width={250} height={300} />
              <h2 className="font-bold text-xl">Name: {user?.name}</h2>
              <p className="font-semibold text-xl">Email: {user?.email}</p>
            </div>
        </div>
    );
};

export default MyProfile;