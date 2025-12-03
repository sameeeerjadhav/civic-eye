'use client';

import { Home, Map, PlusCircle, Users, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState('home');
  const router = useRouter();

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'map', icon: Map, label: 'Map' },
    { id: 'report', icon: PlusCircle, label: 'Report' },
    { id: 'community', icon: Users, label: 'Community' },
    { id: 'messages', icon: MessageSquare, label: 'Chat' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    
    switch(tabId) {
      case 'home':
        // Already on home
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'map':
        alert('Opening live community map...\n\nView:\n• Issue locations\n• Cleanliness heatmap\n• Area scores');
        // Scroll to map section
        document.getElementById('community-map')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'report':
        alert('Opening report form...\n\nReport types:\n🚮 Litter/Dumping\n🎨 Graffiti/Vandalism\n🛣️ Road/Sidewalk Issues\n🌳 Park Maintenance\n⚡ Other Issues');
        break;
      case 'community':
        alert('Opening community hub...\n\nFeatures:\n👥 Volunteers list\n🏆 Leaderboard\n📅 Events calendar\n💬 Discussions');
        break;
      case 'messages':
        alert('Opening community chat...\n\nChat with:\n• Nearby volunteers\n• Community managers\n• Cleanup teams');
        break;
    }
  };

  const handleReportLongPress = () => {
    alert('Quick Report Options:\n\n📸 Take Photo\n📍 Current Location\n🗣️ Voice Note\n📝 Text Report');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 md:hidden">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const isReport = tab.id === 'report';
          
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              onContextMenu={(e) => {
                if (isReport) {
                  e.preventDefault();
                  handleReportLongPress();
                }
              }}
              className={`relative flex flex-col items-center px-3 py-2 transition-all ${
                isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-1 w-10 rounded-full bg-blue-600"></div>
              )}
              
              {/* Icon with badge for report */}
              <div className="relative">
                <Icon className={`h-6 w-6 ${isActive ? 'scale-110' : ''} transition-transform`} />
                
                {/* Animated pulse for report button */}
                {isReport && (
                  <>
                    <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-500 animate-ping opacity-75"></div>
                    <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
                      <PlusCircle className="h-2.5 w-2.5 text-white" />
                    </div>
                  </>
                )}
                
                {/* Notification badge for messages */}
                {tab.id === 'messages' && (
                  <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-green-500 border border-white"></div>
                )}
              </div>
              
              {/* Label */}
              <span className={`mt-1 text-xs font-medium ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                {tab.label}
              </span>
              
              {/* Active background */}
              {isActive && (
                <div className="absolute inset-0 -z-10 bg-blue-50/50 rounded-lg"></div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Floating Action Button for Report (alternative) */}
      <button
        onClick={() => handleTabClick('report')}
        className="absolute -top-6 left-1/2 -translate-x-1/2 md:hidden"
        aria-label="Quick Report"
      >
        <div className="rounded-full bg-gradient-to-r from-red-500 to-orange-500 p-3 shadow-lg hover:shadow-xl active:scale-95 transition-all">
          <PlusCircle className="h-6 w-6 text-white" />
        </div>
      </button>
    </nav>
  );
}