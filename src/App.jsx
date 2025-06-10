import { useState, useCallback } from 'react';

function App() {
  const [sharedPrompt, setSharedPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePromptChange = useCallback((value) => {
    setSharedPrompt(value);
  }, []);

  const fetchOpenAIResponse = useCallback(async (prompt) => {
    try {
      const encodedPrompt = encodeURIComponent(prompt);
      const response = await fetch(`http://localhost:8080/api/openai/${encodedPrompt}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.text();
      return data;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!sharedPrompt.trim()) return;

    setLoading(true);
    setResponse('Loading...');

    const result = await fetchOpenAIResponse(sharedPrompt);
    setResponse(result);
    setLoading(false);
  }, [sharedPrompt, fetchOpenAIResponse]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#1a1a1a] border border-pink-600 rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-pink-500 text-center mb-6">
          💡 OpenAI Prompt Explorer
        </h1>

        <textarea
          placeholder="Enter your prompt here..."
          className="w-full h-32 p-4 text-white bg-black bg-opacity-80 border border-pink-500 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-600"
          value={sharedPrompt}
          onChange={(e) => handlePromptChange(e.target.value)}
          disabled={loading}
        />

        <button
          onClick={handleSubmit}
          disabled={loading || !sharedPrompt.trim()}
          className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Get OpenAI Response'}
        </button>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-pink-400 mb-2">🧠 Response:</h2>
          <div className="bg-black bg-opacity-70 border border-pink-500 text-white p-4 rounded-lg max-h-60 overflow-y-auto whitespace-pre-wrap">
            {response || 'Response will appear here...'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
