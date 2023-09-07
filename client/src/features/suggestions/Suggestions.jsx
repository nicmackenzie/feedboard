import LeftSide from './LeftSide';
import RightSide from './RightSide';

function Home() {
  return (
    <div className="max-w-6xl mx-auto mt-12 grid grid-cols-home gap-4">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Home;
