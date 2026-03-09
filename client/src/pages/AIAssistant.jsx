import { useState } from "react";
import api from "../services/api";

function AIAssistant() {
  const [description, setDescription] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.post('/ai/suggest', { description });
      setSuggestion(response.data.suggestion);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 p-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">AI Project Assistant</h2>
        <p className="text-white mb-8">Describe your project idea and get AI powered suggestions</p>
        <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
          <textarea
            value={description}
            onChange={(d) => setDescription(d.target.value)}
            placeholder="Describe your project idea... e.g. I want to build a food delivery app"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
            rows={5}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white py-3 rounded-lg font-medium transition"
          >
            {loading ? 'Getting Suggestions...' : 'Get Suggestions'}
          </button>
        </div>

        {suggestion && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">AI Suggestions</h3>
            <pre className="text-gray-600 whitespace-pre-wrap font-sans text-sm leading-relaxed">
              {suggestion}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIAssistant;