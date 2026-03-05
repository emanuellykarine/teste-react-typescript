import { PostModel } from "@/src/models/post/post-model";
import Image from "next/image";
import Link from "next/link";
import { formatDatetime, formatDistanceToNow  } from "@/src/utils/format-datetime";

export async function Post(props : PostModel){

    return(
        <Link href="#" className="w-150 m-5">
            <figure>
                <Image src={props.coverImageUrl} width={1200} height={100} alt={props.slug} />
                <figcaption className="pt-2 pb-2 text-sm text-gray-500">{formatDatetime(props.createdAt)}</figcaption>
            </figure>

            <h2 className="font-extrabold text-2xl">{props.title}</h2>
            <p className="pt-2 pb-2 text-base text-gray-600">{props.excerpt}</p>
        </Link>
    );
}