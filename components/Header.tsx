'use client';

import { useState } from 'react';
import { MapPin, Bell, User, Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNotifications = () => {
    alert('You have ' + notificationCount + ' new notifications!\n\n• New report near Main Street\n• Volunteer event tomorrow\n• Your report was cleaned');
    setNotificationCount(0);
  };

  const handleProfileClick = () => {
    alert('Profile menu would open here\n\nView your:\n• Civic Points: 125\n• Badges: 3\n• Reports: 5\n• Volunteer Hours: 12');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"\n\nSearching across:\n• Reports\n• Locations\n• Volunteers\n• Community Events`);
      setSearchQuery('');
    }
  };

  const handleQuickAction = (action: string) => {
    switch(action) {
      case 'map':
        alert('Opening live community map...');
        break;
      case 'reports':
        alert('Showing recent community reports...');
        break;
      case 'volunteers':
        alert('Opening top volunteers leaderboard...');
        break;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left: Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button - Hidden on desktop */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-900">Civic Eye</h1>
              <p className="text-sm text-gray-600">Keep our community clean together</p>
            </div>
          </div>

          {/* Desktop Quick Actions */}
          <div className="hidden md:flex items-center gap-6 ml-6">
            <button 
              onClick={() => handleQuickAction('map')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Live Map
            </button>
            <button 
              onClick={() => handleQuickAction('reports')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Recent Reports
            </button>
            <button 
              onClick={() => handleQuickAction('volunteers')}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Top Volunteers
            </button>
          </div>
        </div>

        {/* Middle: Search Bar - Desktop only */}
        <div className="hidden flex-1 max-w-md mx-4 lg:block">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search locations, issues, or volunteers..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </form>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Report Issue Button - Hidden on mobile */}
          <button 
            className="hidden sm:flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-medium text-white hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm"
            onClick={() => alert('Opening issue report form...\n\nYou can upload photos, add description, and tag location.')}
          >
            <MapPin className="h-4 w-4" />
            <span className="hidden lg:inline">Report Issue</span>
            <span className="inline lg:hidden">Report</span>
          </button>
          
          {/* Notifications */}
          <button 
            className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={handleNotifications}
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            {notificationCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                {notificationCount}
              </span>
            )}
          </button>
          
          {/* Profile */}
          <button 
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 transition-all shadow-sm"
            onClick={handleProfileClick}
            aria-label="Profile"
          >
            <User className="h-4 w-4 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white animate-slide-in">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm"
                />
              </div>
            </form>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleQuickAction('map');
                }}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-left hover:bg-gray-50"
              >
                <div className="rounded-lg bg-blue-100 p-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Live Map</p>
                  <p className="text-sm text-gray-600">View community issues</p>
                </div>
              </button>

              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  alert('Opening issue report form...');
                }}
                className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-white"
              >
                <MapPin className="h-5 w-5" />
                <div>
                  <p className="font-medium">Report Issue</p>
                  <p className="text-sm opacity-90">Help keep community clean</p>
                </div>
              </button>

              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleQuickAction('reports');
                }}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-left hover:bg-gray-50"
              >
                <div className="rounded-lg bg-green-100 p-2">
                  <Bell className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Recent Reports</p>
                  <p className="text-sm text-gray-600">See community issues</p>
                </div>
              </button>

              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleQuickAction('volunteers');
                }}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-left hover:bg-gray-50"
              >
                <div className="rounded-lg bg-purple-100 p-2">
                  <User className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Top Volunteers</p>
                  <p className="text-sm text-gray-600">Community leaders</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}