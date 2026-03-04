import { parse, resolve } from "path";
import { PostRepository } from "./post-repository";
import { readFile } from 'fs/promises';
import { PostModel } from "@/src/models/post/post-model";


const ROOT_DIR = process.cwd();
// const JSON_POST_PATH = `${ROOT_DIR}/src/db/seed/posts.json`;
const JSON_POST_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json'); //faz o caminho certinho com barra ou contra barra
const SIMULATE_WAIT_IN_MS = 5000;
//usa async quando faz requisição, consulta banco ou lê arquivo.

export class JsonPostRepository implements PostRepository {

    private async simulateWait() {
        if (SIMULATE_WAIT_IN_MS <= 0) return;

        await new Promise(resolver => setTimeout(resolver, SIMULATE_WAIT_IN_MS));
    }

    private async readFromDisk(): Promise<PostModel[]> {
        const jsonContent = await readFile(JSON_POST_PATH, 'utf-8');
        const parsedJson = JSON.parse(jsonContent); //aq ele tá pegando todo o dicionário ainda
        const { posts } = parsedJson; //desestruturação, ele pega de dentro do dicionário o array que tá atribuido a chave de posts (mesma coisa de parsedJson.posts)
        return posts;
    }   

    async findAll(): Promise<PostModel[]> {
        await this.simulateWait();

        const posts = await this.readFromDisk();
        return posts;
    }

    async findById(id: string): Promise<PostModel> {
        await this.simulateWait();
        
        const posts = await this.findAll();
        const post = (await posts).find(post => post.id === id); //find retorna o primeiro elemento que satisfaz a condição 
        //post => post.id === id (pra cada post ve se o id dele é igual o id que foi passado, é uma arrow function)

        if (!post) throw new Error('Post não encontrado');

        return post;
    }
}

