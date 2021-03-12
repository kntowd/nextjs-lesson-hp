import { getAllPostsData } from "../lib/posts";
import Post from "../components/Post";
import Layout from "../components/Layout";

const Blog = ({posts}) => {
  return(
    <Layout title="blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post}/>)}
      </ul>
    </Layout>
  ) 
};

export default Blog;

export async function getStaticProps(){
  const posts = await getAllPostsData();
  return {
    props: {posts},
  }
}