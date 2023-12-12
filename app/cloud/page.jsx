import React from "react"
import cloudinary from "cloudinary"
import Upload from "../components/Upload"
import Img from "../components/Img"
import { currentUser } from "@clerk/nextjs"

const page = async () => {
    const user = await currentUser()
    const res = await cloudinary.v2.search.expression(`resource_type:image AND folder=cloudDrive AND context.userId=${user.id}`).sort_by("public_id", "desc").max_results(20).execute()
    return (
        <section className='p-4'>
            <ul className='flex flex-wrap justify-center md:justify-normal gap-4'>
                {res.resources.map((img) => {
                    return <Img key={img.filename} img={img} />
                })}
                <Upload totalCount={res.total_count} />
            </ul>
        </section>
    )
}

export default page
