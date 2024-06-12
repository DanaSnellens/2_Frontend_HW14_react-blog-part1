import './OverviewBlogs.css'
import posts from '../../constants/data.json';
function OverviewBlogs() {


    console.log(posts);
    return (
        <>
            <h1>Bekijk alle {posts.length} posts </h1>
        </>
    )
}


export default OverviewBlogs;