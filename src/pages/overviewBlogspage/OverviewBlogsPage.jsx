import './OverviewBlogsPage .css'
import posts from '../../constants/data.json';
import BlogDetailsComponent from "../../components/blogDetailsComponent/BlogDetailsComponent.jsx";
function OverviewBlogsPage() {
    return (
        <>
            <h1>Bekijk alle {posts.length} posts </h1>
            <ul className="blog-list">
                {posts.map((post) => {
                    return <BlogDetailsComponent
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        shares={post.shares}
                        comments={post.comments}
                        author={post.author}
                    />
                })}
            </ul>

        </>
    )
}


export default OverviewBlogsPage;