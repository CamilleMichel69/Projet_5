import Banner from "../../components/banner/banner";
import Gallery from "../../components/gallery/gallery";

function Home() {
    return (
      <main>
        <Banner type="home" text="Chez vous, partout et ailleurs" />
        <Gallery />
      </main>
    )
  }
  
  export default Home