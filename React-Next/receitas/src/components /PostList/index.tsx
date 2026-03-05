import { postRepository } from "@/src/repositories/post";
import { Post } from "../Post";

export async function PostList() {
    const posts = await postRepository.findAll();
    
    return (
        <div className="grid grid-cols-3 gap-0 justify-items-center mx-auto">
            {posts.map(post => {
                return <Post key={post.id} {...post} />
            })}
        </div>
    );
}