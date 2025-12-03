'use client';

import { 
  Home, 
  Map, 
  Flag, 
  Users, 
  Trophy, 
  Settings, 
  HelpCircle, 
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { icon: Home, label: 'Dashboard', active: true, alert: false },
  { icon: Map, label: 'Live Map', active: false, alert: true },
  { icon: Flag, label: 'My Reports', active: false, alert: false },
  { icon: Users, label: 'Volunteers', active: false, alert: false },
  { icon: Trophy, label: 'Leaderboard', active: false, alert: false },
  { icon: TrendingUp, label: 'Analytics', active: false, alert: false },
  { icon: Settings, label: 'Settings', active: false, alert: false },
  { icon: HelpCircle, label: 'Help Center', active: false, alert: false },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMenuItemClick = (label: string) => {
    setActiveItem(label);
    alert(`Navigating to ${label}...`);
    if (window.innerWidth < 768) {
      setIsMobileOpen(false);
    }
  };

  const handleVolunteerNow = () => {
    alert('Joining volunteer program...\n\nYou will:\n1. See nearby cleanup events\n2. Get notifications\n3. Earn Civic Points\n4. Join team activities');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-lg bg-blue-600 p-2 text-white md:hidden"
        aria-label="Open menu"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 z-50 h-screen transform transition-all duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:flex
        ${isCollapsed ? 'w-20' : 'w-64'}
        flex-col border-r border-gray-200 bg-white
      `}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
                <Map className="h-5 w-5 text-white" />
              </div>
              <h2 className="font-bold text-gray-900">Civic Eye</h2>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden rounded-lg p-1 hover:bg-gray-100 md:block"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
            
            <button
              onClick={() => setIsMobileOpen(false)}
              className="rounded-lg p-1 hover:bg-gray-100 md:hidden"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 space-y-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            
            return (
              <button
                key={item.label}
                onClick={() => handleMenuItemClick(item.label)}
                className={`
                  flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-all
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                  ${isCollapsed ? 'justify-center' : ''}
                `}
                title={isCollapsed ? item.label : ''}
              >
                <div className="relative">
                  <Icon className="h-5 w-5" />
                  {item.alert && !isActive && (
                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>
                  )}
                </div>
                
                {!isCollapsed && (
                  <span className="flex-1">{item.label}</span>
                )}
                
                {!isCollapsed && item.alert && !isActive && (
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Volunteer Now Button */}
        {!isCollapsed && (
          <div className="border-t border-gray-200 p-4">
            <button
              onClick={handleVolunteerNow}
              className="w-full rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 font-medium text-white hover:from-green-700 hover:to-emerald-700 transition-all"
            >
              Volunteer Now
            </button>
            <p className="mt-2 text-center text-xs text-gray-600">
              Join 450+ community volunteers
            </p>
          </div>
        )}

        {/* User Profile */}
        <div className="border-t border-gray-200 p-4">
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-xs font-bold text-white">CE</span>
            </div>
            
            {!isCollapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Community User</p>
                <p className="text-xs text-gray-600">125 Civic Points</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}