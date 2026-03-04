import { PostModel } from "@/src/models/post/post-model";

export async function Post(props : PostModel){

    return(
        <div>
            <figure>
                <img src={props.coverImageUrl} alt={props.slug} />
                <figcaption>{props.createdAt}</figcaption>
            </figure>

            <h2>{props.title}</h2>
            <p>{props.excerpt}</p>
        </div>
    );
}