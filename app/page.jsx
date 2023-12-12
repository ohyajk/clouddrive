import { currentUser } from "@clerk/nextjs"
import Link from "next/link"
export default async function Home() {
    const user = await currentUser()
    console.log(user)
    return (
        <section className='text-gray-600 body-font'>
            {user?.firstName || "user"}
            <ul className='p-4 flex flex-col gap-4'>
                <Link href='/login' className='px-4 py-2 bg-black text-white rounded-lg'>
                    login
                </Link>
                <Link href='/register' className='px-4 py-2 bg-black text-white rounded-lg'>
                    register
                </Link>
            </ul>
        </section>
    )
}
