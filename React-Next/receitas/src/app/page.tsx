import { SpinLoader } from "../components /SpinLoader";
import { PostList } from "../components /PostList";
import { Suspense } from "react";
import { Header } from "../components /Header";
import { Container } from "../components /Container";
import { Footer } from "../components /Footer";
export default async function HomePage() {
  return (
    <Container>
      <Header/>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <Footer/>
      
    </Container>
  );
}
