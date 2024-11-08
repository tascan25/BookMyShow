import Navbar from "./components/Navbar";
import LocationDilaog from "./components/LocationDilaog";
import FeaturesTab from "./components/FeaturesTab";
import MovieProjection from "./components/MovieProjection";
import Movies_Shows_Coursel from "./components/Movies_Shows_Coursel";
import MobileNav from "./components/MobileNav";
function App() {
  return (
    <>
      <Navbar />
      <LocationDilaog />
      <main className="flex flex-col bg-[#f5f5f5] justify-center items-center min-w-full h-full">
        <FeaturesTab />
        <Movies_Shows_Coursel />
        <MovieProjection />
        <MobileNav />
      </main>
    </>
  );
}

export default App;
