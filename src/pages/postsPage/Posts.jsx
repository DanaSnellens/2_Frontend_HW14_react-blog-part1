import './Posts.css';
import {useParams} from 'react-router-dom';
import posts from '../../constants/data.json';
function Posts() {
    const { id } = useParams();

    const {title, subtitle, content, created, author, readTime, comments, shares} = posts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p> Geschreven door <em>{author}</em> op {created}</p>
            <p>{content}</p>
            <p>{comments} reacties - {shares} keer gedeeld</p>
            <p>{readTime}</p>
        </>
    )
}

export default Posts;
