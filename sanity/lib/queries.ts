import { defineQuery } from 'next-sanity';

export const STARTUP_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    author-> {
        _id, name, image, bio 
    },
    views,
    description,
    categoriy,
    image
}`);

export const STARTUP_BY_ID_QUERY =
    defineQuery(`*[_type == "startup" && _id == $id][0] {
    _id,
    title,
    slug,
    _createdAt,
    author-> {
        _id, name, username, image, bio 
    },
    views,
    description,
    categoriy,
    image,
    pitch
}`);