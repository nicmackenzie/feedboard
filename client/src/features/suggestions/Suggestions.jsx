import { useState, useEffect } from "react";
import SuggestionForm  from "../../components/SuggestionForm";
import Button from "../../components/Button";
function Home() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [sort, setSort] = useState('most upvotes')
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    fetchFeedbacks();
  }, [sort])
  async  function fetchFeedbacks() {
    axios.get('/feedback?sort='+sort).then(res => {
      setFeedbacks(res.data);
    })
  }
  function openFeedbackForm() {
    setShowFeedbackForm(true)
  }
  return ( 
  <main className="bg-white md:max-w-xl mx-auto md:shadow-lg md:rounded-lg
  overflow-hidden">
    {/* header section */}
    <div className="bg-gradient-to-r from-blue-400 to-purple-800 p-6 text-white">
      <h1 className="font-bold text-xl">Feedboard</h1>
      <p className="text-opacity-90 text-slane-700">Give us feedback on suggestions,thoughts, and 
      concerns about a specific product, service, or project</p>
    </div>
    <div className="bg-gray-100 px-2 py-2 flex">
      <div className="grow flex items-center">
        <span className="text-gray-400 text-sm">Sorted by:</span>
        <select 
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="bg-transparent py-2 text-gray-500">
          <option value="most upvotes">Most Upvotes</option>
          <option value="most comments">Most Comments</option>
          <option value="least comments">Least Comments</option>
        </select>
      </div>
      <div>
        <Button onClick={openFeedbackForm} >+ Make a suggestion</Button>
      </div>
    </div>
    {showFeedbackForm && (
      <SuggestionForm setShow={setShowFeedbackForm} />
    )}
  </main>
  )
}

export default Home;
