import { useParams } from "react-router-dom"
import blogs from "../../data/blogs"
import { useEffect, useState } from "react"
import './details.css'

export default function Details() {
    const { id } = useParams<string>()
    const [title, setTitle] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [author, setAuthor] = useState<string>('')

    useEffect(() => {
        const result = blogs.find(item => item.id == Number(id))
        setTitle(result?.title ?? '')
        setImage(result?.image_url ?? '')
        setContent(result?.content ?? '')
        setAuthor(result?.author ?? '')
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
            <h2 className='title'>บทความ : {title}</h2>
            <img src={image} alt={title} className="blog-image" />
            <div className="blog-detail">
                <strong>ผู้เขียน : {author}</strong>
                <p>{content}</p>
            </div>
        </div>
    )
}