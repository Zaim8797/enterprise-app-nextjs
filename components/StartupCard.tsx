import { formatDate } from '@/lib/utils'
import { Eye } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'

const StartupCard = ({ post } : { post: StartupTypeCard}) => {

    const { _createdAt, views, author: { _id: authorId, name }, title, category, _id, image, description } = post;

    return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <Eye className='size-6 text-primary' />
                <span>{views}</span>
            </div>
        </div>
        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${authorId}`}>
                    <p className='text-16-medium line-clamp-1'>
                        {name || 'Anonymous'}
                    </p>
                </Link>
                <Link href={`/startup/${_id}`}>
                    <h3 className='text-26-semibold line-clamp-1'>
                        {title}
                    </h3>
                </Link>
            </div>
                <Link href={`/user/${authorId}`}>
                    <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className="rounded-full" />
                </Link>
        </div>

        <Link href={`/startup/${_id}`}>
            <p className='startup-card_desc'>
                { description || 'No description provided.'}
            </p>

            <img src={image} alt="placeholder" className='startup-card_img' />
        </Link>

        <div className='flex-between gap-3 mt-5'>
            <Link href={`/?query=${category.toLowerCase()}`} className='text-14-medium text-primary'>
                <p className='text-16-medium'>{ category }</p>
            </Link>
            <Button className="startup-card_btn"asChild>
                <Link href={`/startup/${_id}`}>Details</Link>
            </Button>
        </div>
    </li>
)
}

export default StartupCard