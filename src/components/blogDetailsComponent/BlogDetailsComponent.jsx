/*import posts from '../../constants/data.json';*/
import  {Link} from 'react-router-dom'
import './BlogDetailsComponent.css';

function BlogDetailsComponent({id, title, author, comments, shares}) {

    return (
        <li className="blog-detail">
            <h2 className="blog-title"><Link to={`/posts/${id}`}>{title}</Link> ({author})</h2>

            <p>{comments} reacties - {shares} keer gedeeld </p>
        </li>
    );
}

export default BlogDetailsComponent;