 import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-bold text-white mb-4">
          Find Your Perfect <span className="text-blue-400">Dev Partner</span>
        </h1>
        <p className="text-gray-400 text-xl mb-8 max-w-xl">
          Post your project, get matched with developers based on skills and experience, and build something amazing together.
        </p>
        <div className="flex gap-4">
          <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition text-lg">
            Get Started
          </Link>
          <Link to="/login" className="border border-gray-500 hover:border-blue-400 text-white px-8 py-3 rounded-lg font-medium transition text-lg">
            Login
          </Link>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Why StackMatch?</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
  <span className="text-white font-bold text-lg">SM</span>
</div>
            <h3 className="text-xl font-bold text-white mb-2">Smart Matching</h3>
            <p className="text-gray-400 text-sm">Our algorithm matches developers based on skill overlap, experience level and collaboration rating.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
  <span className="text-white font-bold text-lg">AI</span>
</div>
            <h3 className="text-xl font-bold text-white mb-2">AI Powered</h3>
            <p className="text-gray-400 text-sm">Get Gemini AI powered suggestions for your tech stack, team composition and project timeline.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
  <span className="text-white font-bold text-lg">CO</span>
</div>
            <h3 className="text-xl font-bold text-white mb-2">Collaborate</h3>
            <p className="text-gray-400 text-sm">Connect with developers who complement your skills and build projects that matter.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-12 text-center">
        <p className="text-gray-500 mb-4">Built with</p>
        <div className="flex items-center justify-center gap-8 text-gray-400 font-medium">
          <span>MongoDB</span>
          <span>•</span>
          <span>Express</span>
          <span>•</span>
          <span>React</span>
          <span>•</span>
          <span>Node.js</span>
          <span>•</span>
          <span>Gemini AI</span>
        </div>
      </div>
      <div className="text-center py-6 text-gray-600 text-sm">
        Built by Abhipsa — <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">GitHub</a>
      </div>
    </div>
  );
}

export default Home;