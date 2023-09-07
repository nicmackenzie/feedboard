import { useState } from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import SuggestionForm from './SuggestionForm';

function Home() {
  const [displaySuggestionForm, setDisplaySuggestionForm] = useState(false);

  return (
    <div className="max-w-6xl mx-auto mt-12 grid grid-cols-home gap-4">
      <LeftSide />
      {!displaySuggestionForm ? (
        <RightSide onSetDisplayForm={setDisplaySuggestionForm} />
      ) : (
        <SuggestionForm onSetDisplayForm={setDisplaySuggestionForm} />
      )}
    </div>
  );
}

export default Home;
