import { SpinLoader } from "../components /SpinLoader";
import { PostList } from "../components /PostList";
import { Suspense } from "react";
import { Header } from "../components /Header";
export default async function HomePage() {
  return (
    <div>
      <Header/>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </div>
  );
}
