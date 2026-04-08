
import bgimage from "../assets/ai.gif";

const Home = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-black">
      <img
        src={bgimage}
        alt=""
        className="absolute w-50% h-50% object-cover z-10 "
      />
    </div>
  );
}

export default Home
