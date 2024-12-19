import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/image.png"
import { ClerkProvider, SignedIn, UserButton, } from '@clerk/nextjs'
function Navbar() {
    // const { user } = useUser();

    return (
        <ClerkProvider>

            <div className=" px-4 shadow-md py-4 mb-8">
                <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src={Logo}
                                className="h-12 w-auto"
                                alt="logo"
                            />

                        </Link>
                    </div>

                    {/* User Button (only show when signed in) */}
                    <div className="flex items-center space-x-4 text-gray-700 gap-2">
                        <SignedIn >
                            <UserButton />
                            {/* {user?.firstName} */}
                        </SignedIn>
                    </div>
                </div>
            </div>

        </ClerkProvider>
    )
}

export default Navbar