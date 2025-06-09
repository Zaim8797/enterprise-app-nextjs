
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth, signIn, signOut } from '@/auth'
import { redirect } from 'next/dist/server/api-utils'

const Navbar = async () => {

const session = await auth();

  return (
    <div className='px-5 py-3 bg-white shadow-md rounded-lg'>
        <nav className='flex items-center justify-between'>
            <Link href="/" className='text-white hover:text-gray-300'>
                <Image src={"/z-logo.png"} alt="Logo" width={50} height={50} className='inline-block mr-2' />
            </Link>

            <div className='flex items-center gap-5'>
                {session && session?.user ? (
                    // If the user is authenticated, show these links
                    <>
                    <Link href="/startup/create">
                        <span className='text-black hover:text-gray-500'>
                            Create
                        </span>
                    </Link>

                    <form action={async () => {
                        "use server";
                        await signOut({ redirectTo: '/' });
                    }}>
                        <button type='submit' className="text-black hover:text-gray-500 cursor-pointer">
                            Logout
                        </button>
                    </form>

                    <Link href={`/user/${session?.user?.id}`}>
                        <span className='text-black hover:text-gray-500'>
                            {session?.user?.name}
                        </span>
                    </Link>
                    </>
                ) : (
                    // If the user is not authenticated, show this link
                    <form action={async () => {
                        "use server";
                       await signIn('github')}} >
                        <button type='submit' className='text-black hover:text-gray-500 cursor-pointer'>
                            Login
                        </button>
                    </form>
                ) 
                }
            </div>
        </nav>
    </div>
  );
}

export default Navbar