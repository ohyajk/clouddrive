export default function Loading() {
    const arr = Array.from({ length: 15 })

    return (
        <section className='p-4'>
            <ul className='flex flex-wrap justify-center md:justify-normal gap-4'>
                {arr.map((a, i) => {
                    return <li key={i} className='p-2 rounded-lg shadow-md shadow-black/70 gradient-bg  h-[300px] w-[300px] '></li>
                })}
            </ul>
        </section>
    )
}
