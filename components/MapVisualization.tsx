'use client';

import { useState } from 'react';
import { MapPin, Filter, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';

// Define the locations array
const locations = [
  { id: 1, name: "Train phe near playground", status: "critical", x: 20, y: 30 },
  { id: 2, name: "Graffiti on community wall", status: "moderate", x: 60, y: 50 },
  { id: 3, name: "Sidewalk debris - Cleaned", status: "clean", x: 80, y: 70 },
];

const statusColors = {
  critical: "bg-red-500 border-red-700",
  moderate: "bg-yellow-500 border-yellow-700",
  clean: "bg-green-500 border-green-700"
};

const statusLabels = {
  critical: "Critical",
  moderate: "Moderate",
  clean: "Clean"
};

export default function MapVisualization() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeFilter, setActiveFilter] = useState<'all' | 'critical' | 'moderate' | 'clean'>('all');

  const handleZoomIn = () => {
    if (zoomLevel < 2) setZoomLevel(zoomLevel + 0.25);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.5) setZoomLevel(zoomLevel - 0.25);
  };

  const handleRefresh = () => {
    alert('Refreshing live data from community reports...');
    // In real app, this would fetch new data
  };

  const filteredLocations = locations.filter(loc => 
    activeFilter === 'all' || loc.status === activeFilter
  );

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      {/* Controls Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Community Cleanliness Heatmap</h3>
          <p className="text-sm text-gray-600">Live visualization of reported issues by severity</p>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Filter Buttons */}
          <div className="flex gap-1 rounded-lg border border-gray-300 p-1">
            {['all', 'critical', 'moderate', 'clean'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`rounded px-3 py-1 text-xs font-medium capitalize transition-all ${
                  activeFilter === filter 
                    ? filter === 'critical' ? 'bg-red-100 text-red-700' : 
                      filter === 'moderate' ? 'bg-yellow-100 text-yellow-700' : 
                      filter === 'clean' ? 'bg-green-100 text-green-700' : 
                      'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter === 'all' ? 'All' : filter}
              </button>
            ))}
          </div>
          
          {/* Map Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="rounded-lg border border-gray-300 p-2 hover:bg-gray-50 transition-colors"
              title="Refresh data"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
            <div className="flex gap-1 rounded-lg border border-gray-300 p-1">
              <button
                onClick={handleZoomOut}
                className="rounded p-1 hover:bg-gray-100 disabled:opacity-50"
                disabled={zoomLevel <= 0.5}
                title="Zoom out"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="px-2 text-sm text-gray-600">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={handleZoomIn}
                className="rounded p-1 hover:bg-gray-100 disabled:opacity-50"
                disabled={zoomLevel >= 2}
                title="Zoom in"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
          <span className="text-sm font-medium">Clean - No active issues</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
          <span className="text-sm font-medium">Moderate - Needs monitoring</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-red-500"></div>
          <span className="text-sm font-medium">Critical - Immediate action needed</span>
        </div>
      </div>

      {/* Map Container */}
      <div 
        className="relative h-96 w-full overflow-hidden rounded-xl border-2 border-gray-300 bg-gradient-to-br from-green-50 via-yellow-50 to-red-50"
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top left' }}
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`h-${i}`} className="absolute h-px w-full bg-gray-400" style={{ top: `${(i + 1) * 10}%` }}></div>
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`v-${i}`} className="absolute w-px h-full bg-gray-400" style={{ left: `${(i + 1) * 10}%` }}></div>
          ))}
        </div>

        {/* Areas with different colors */}
        <div className="absolute left-0 top-0 h-1/3 w-1/3 rounded-br-xl bg-green-200/40"></div>
        <div className="absolute right-0 top-0 h-2/3 w-1/3 rounded-bl-xl bg-yellow-200/40"></div>
        <div className="absolute left-1/3 bottom-0 h-1/2 w-1/3 rounded-t-xl bg-red-200/40"></div>

        {/* Street Labels */}
        <div className="absolute left-4 top-4">
          <span className="text-xs font-medium text-gray-700">Center Park</span>
        </div>
        <div className="absolute right-4 top-4">
          <span className="text-xs font-medium text-gray-700">Main Street</span>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <span className="text-xs font-medium text-gray-700">Community Center</span>
        </div>
        <div className="absolute left-4 bottom-1/2">
          <span className="text-xs font-medium text-gray-700">Residential Area</span>
        </div>

        {/* Location Markers - Only show filtered locations */}
        {filteredLocations.map((location) => (
          <button
            key={location.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${selectedLocation === location.id ? 'z-10' : ''}`}
            style={{ left: `${location.x}%`, top: `${location.y}%` }}
            onClick={() => setSelectedLocation(location.id)}
            onMouseEnter={() => setSelectedLocation(location.id)}
            onMouseLeave={() => setSelectedLocation(null)}
          >
            <div className="relative">
              <div className={`h-8 w-8 rounded-full border-2 ${statusColors[location.status as keyof typeof statusColors]} flex items-center justify-center transform transition-all duration-200 ${selectedLocation === location.id ? 'scale-125' : 'hover:scale-110'}`}>
                <MapPin className="h-4 w-4 text-white" />
              </div>
              
              {/* Tooltip/Popup */}
              {selectedLocation === location.id && (
                <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2">
                  <div className="rounded-lg bg-white p-3 shadow-lg border border-gray-200 min-w-[200px]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`h-3 w-3 rounded-full ${location.status === 'critical' ? 'bg-red-500' : location.status === 'moderate' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                      <span className="text-sm font-medium text-gray-900">{location.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        location.status === 'critical' ? 'bg-red-100 text-red-700' : 
                        location.status === 'moderate' ? 'bg-yellow-100 text-yellow-700' : 
                        'bg-green-100 text-green-700'
                      }`}>
                        {statusLabels[location.status as keyof typeof statusLabels]}
                      </span>
                      <button 
                        className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Details for: ${location.name}\nStatus: ${statusLabels[location.status as keyof typeof statusLabels]}\nLocation: X: ${location.x}%, Y: ${location.y}%`);
                        }}
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </button>
        ))}

        {/* Map Title */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
          <p className="text-xs font-medium text-gray-700">Live Community Health Map</p>
          <p className="text-xs text-gray-500">Click markers for details</p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          The map becomes the city's live health report, exposing mismanaged areas and tracking improvements
        </p>
      </div>
    </div>
  );
}