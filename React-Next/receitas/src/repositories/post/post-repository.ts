//métodos do meu repositório 
// divide os objetos de dominio (models) das operações de persistência desses objetos 
import { PostModel

 } from "../../models/post/post-model";
export interface PostRepository {
    findAll(): Promise<PostModel[]>; //indica que o método é assincrono, um valor que não está pronto mas que vai estar. retorna uma promessa que vai entregar um number
    findById(id: string) : Promise<PostModel>;
}