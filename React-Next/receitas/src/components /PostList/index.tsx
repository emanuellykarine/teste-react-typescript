import { postRepository } from "@/src/repositories/post";
import { Post } from "../Post";

export async function PostList() {
    const posts = await postRepository.findAll();
    
    return (
        <div>
            {posts.map(post => {
                return <Post key={post.id} {...post} />
            })}
        </div>
    );
}