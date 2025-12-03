'use client';

import { Target, Info, Play, Users } from 'lucide-react';
import { useState } from 'react';

export default function WelcomeBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLearnMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleWatchDemo = () => {
    alert('Opening Civic Eye demo video...\n\nSee how communities use Civic Eye to:\n1. Report issues\n2. Track cleanup progress\n3. Earn rewards\n4. Improve neighborhoods');
  };

  const handleJoinCommunity = () => {
    alert('Joining Civic Eye community...\n\nYou will:\n1. Get volunteer opportunities\n2. Receive local alerts\n3. Join cleanup events\n4. Earn Civic Points');
  };

  return (
    <div className="mb-8">
      {/* Main Title */}
      <div className="mb-6 text-center">
        <div className="mb-2 flex items-center justify-center gap-2">
          <div className="relative">
            <Target className="h-8 w-8 text-blue-600 animate-pulse" />
            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Civic Eye</h1>
        </div>
        <p className="text-lg text-gray-600">Keep our community clean together</p>
      </div>

      {/* Description Card */}
      <div className="mb-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Civic Eye - Community Monitoring System</h2>
        <p className="mb-4 text-gray-700">
          A community-driven smart monitoring system where citizens report issues in real time, 
          visualize problem zones on maps, track area reputation, and volunteer for action.
        </p>
        
        <div className="rounded-lg bg-white/80 p-4 border mb-4">
          <p className="font-medium text-blue-700 text-center text-lg">
            Monitor it → Improve it; Everyone sees it → No one ignores it.
          </p>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Civic Eye turns this belief into reality by transforming passive citizens into active participants.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button 
            onClick={handleLearnMore}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700 transition-colors flex-1"
          >
            <Info className="h-5 w-5" />
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
          
          <button 
            onClick={handleWatchDemo}
            className="flex items-center justify-center gap-2 rounded-lg border border-blue-600 bg-white px-4 py-3 font-medium text-blue-600 hover:bg-blue-50 transition-colors flex-1"
          >
            <Play className="h-5 w-5" />
            Watch Demo
          </button>
          
          <button 
            onClick={handleJoinCommunity}
            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 font-medium text-white hover:from-green-700 hover:to-emerald-700 transition-all flex-1"
          >
            <Users className="h-5 w-5" />
            Join Community
          </button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-blue-200">
            <h3 className="mb-3 font-semibold text-gray-900">Key Benefits:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-700">Real-time issue reporting with GPS & photos</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-700">Smart heatmaps showing clean/moderate/critical zones</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                <span className="text-sm text-gray-700">Volunteer system with points & leaderboard</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-orange-500"></div>
                <span className="text-sm text-gray-700">Local alerts for nearby reported issues</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                <span className="text-sm text-gray-700">Cleanliness scores for each neighborhood</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></div>
                <span className="text-sm text-gray-700">Green credits for eco-friendly actions</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 