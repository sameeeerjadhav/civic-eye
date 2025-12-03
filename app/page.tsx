'use client';

import { AlertCircle, Clock, CheckCircle, Target, Map, Users, Bell, BarChart, TrendingUp, Award, Shield } from 'lucide-react'
import StatsCard from '@/components/StatsCard'
import WelcomeBanner from '@/components/WelcomeBanner'
import MapVisualization from '@/components/MapVisualization'
import FeatureCard from '@/components/FeatureCard'
import { useState } from 'react'

export default function Home() {
  const [activeView, setActiveView] = useState<'map' | 'list'>('map');
  const [reportCount, setReportCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const handleReportIssue = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert('🎯 Issue Reported Successfully!\n\nThank you for keeping our community clean.\n\nYour report will:\n1. Appear on community map\n2. Alert nearby volunteers\n3. Be assigned for cleanup\n4. Update area cleanliness score');
      setReportCount(prev => prev + 1);
      setIsLoading(false);
    }, 1000);
  };

  const handleViewReports = (type: string) => {
    alert(`📋 ${type} Reports\n\nViewing all ${type.toLowerCase()} issues in your community.\n\nSort by: Newest | Nearest | Most Critical`);
  };

  const handleFeatureClick = (feature: string) => {
    const featureData = {
      'Smart Heatmaps': {
        description: 'Live color-coded map showing community health',
        actions: ['View heatmap', 'Compare areas', 'Track progress']
      },
      'Volunteer System': {
        description: 'Join cleanup drives and earn recognition',
        actions: ['Find events', 'Join team', 'Earn points']
      },
      'Local Alerts': {
        description: 'Instant notifications about nearby issues',
        actions: ['Set preferences', 'View alerts', 'Respond']
      },
      'Cleanliness Score': {
        description: 'Track your neighborhood health score',
        actions: ['View score', 'See trends', 'Compare areas']
      }
    }[feature] || { description: 'Explore feature', actions: [] };

    alert(`🔍 ${feature}\n\n${featureData.description}\n\nAvailable actions:\n${featureData.actions.map(a => `• ${a}`).join('\n')}`);
  };

  return (
    <div className="space-y-8">
      <WelcomeBanner />
      
      {/* Quick Stats Bar */}
      <div className="rounded-xl bg-white border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-gray-900">Community Status</h3>
            <p className="text-sm text-gray-600">Updated in real-time</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="text-xs text-gray-600">Clean Areas</div>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">450+</div>
              <div className="text-xs text-gray-600">Volunteers</div>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">2.3d</div>
              <div className="text-xs text-gray-600">Avg. Resolution</div>
            </div>
          </div>
          <button
            onClick={handleReportIssue}
            disabled={isLoading}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 font-medium text-white shadow-md hover:shadow-lg active:scale-95 transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                <span>Reporting...</span>
              </>
            ) : (
              <>
                <Target className="h-4 w-4" />
                <span>Report Issue</span>
              </>
            )}
          </button>
        </div>
      </div>
      
      {/* Features Grid */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900">Key Features</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Map className="h-5 w-5" />}
            title="Smart Heatmaps"
            description="Live cleanliness heatmap showing clean, moderate, or critical areas"
            color="blue"
            onClick={() => handleFeatureClick('Smart Heatmaps')}
          />
          
          <FeatureCard
            icon={<Users className="h-5 w-5" />}
            title="Volunteer System"
            description="Earn Civic Points, Badges & Leaderboard ranking for cleanup"
            color="green"
            onClick={() => handleFeatureClick('Volunteer System')}
          />
          
          <FeatureCard
            icon={<Bell className="h-5 w-5" />}
            title="Local Alerts"
            description='"Issue reported in your area" alerts for nearby users'
            color="orange"
            onClick={() => handleFeatureClick('Local Alerts')}
          />
          
          <FeatureCard
            icon={<BarChart className="h-5 w-5" />}
            title="Cleanliness Score"
            description="Area ratings based on Issues, AQI & resolution speed"
            color="purple"
            onClick={() => handleFeatureClick('Cleanliness Score')}
          />
        </div>
      </div>

      {/* Stats Overview */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Report Overview</h2>
          <button 
            onClick={() => alert('📊 Detailed Analytics\n\nView comprehensive reports and insights')}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View Analytics →
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Reports"
            count={reportCount}
            description="Community issues reported"
            color="blue"
            icon={<Target className="h-6 w-6" />}
            onClick={() => handleViewReports('All')}
          />
          <StatsCard
            title="Needs Attention"
            count={1}
            description="Requiring immediate action"
            color="red"
            icon={<AlertCircle className="h-6 w-6" />}
            onClick={() => handleViewReports('Needs Attention')}
          />
          <StatsCard
            title="In Progress"
            count={1}
            description="Currently being resolved"
            color="yellow"
            icon={<Clock className="h-6 w-6" />}
            onClick={() => handleViewReports('In Progress')}
          />
          <StatsCard
            title="Cleaned"
            count={1}
            description="Successfully resolved"
            color="green"
            icon={<CheckCircle className="h-6 w-6" />}
            onClick={() => handleViewReports('Cleaned')}
          />
        </div>
      </div>

      {/* Map Section */}
      <div id="community-map">
        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Community Monitoring</h2>
            <p className="text-gray-600">Interactive map showing real-time issue locations</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveView('map')}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all flex items-center gap-2 ${
                activeView === 'map' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Map className="h-4 w-4" />
              Map View
            </button>
            <button
              onClick={() => setActiveView('list')}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeView === 'list' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {activeView === 'map' ? (
          <MapVisualization />
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Recent Community Reports</h3>
              <button 
                onClick={() => alert('📋 All Reports\n\nView complete list with filters and sorting')}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View All →
              </button>
            </div>
            <div className="space-y-4">
              {[
                { 
                  id: 1, 
                  title: "Train phe near playground", 
                  location: "Center Park, Zara-A", 
                  status: "Critical", 
                  time: "2h ago",
                  reportedBy: "Sarah M.",
                  priority: "High"
                },
                { 
                  id: 2, 
                  title: "Graffiti on community wall", 
                  location: "Main Street Community Center", 
                  status: "In Progress", 
                  time: "1 day ago",
                  reportedBy: "Community Watch",
                  priority: "Medium"
                },
                { 
                  id: 3, 
                  title: "Sidewalk debris cleaned", 
                  location: "No Avenue & Kids St", 
                  status: "Resolved", 
                  time: "3 days ago",
                  reportedBy: "Volunteer Team",
                  priority: "Low"
                },
              ].map((report) => (
                <div key={report.id} className="rounded-lg border border-gray-100 p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900">{report.title}</h4>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          report.priority === 'High' ? 'bg-red-100 text-red-700' : 
                          report.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                          'bg-green-100 text-green-700'
                        }`}>
                          {report.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{report.location}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Reported by {report.reportedBy}</span>
                        <span>•</span>
                        <span>{report.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                        report.status === 'Critical' ? 'bg-red-100 text-red-700' : 
                        report.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : 
                        'bg-green-100 text-green-700'
                      }`}>
                        {report.status}
                      </span>
                      <button 
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium whitespace-nowrap"
                        onClick={() => alert(`📄 Report Details\n\nTitle: ${report.title}\nLocation: ${report.location}\nStatus: ${report.status}\nPriority: ${report.priority}\nReported by: ${report.reportedBy}\nTime: ${report.time}`)}
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

            {/* Community Impact Section */}
      <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Community Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how Civic Eye transforms neighborhoods by empowering citizens and improving community health
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Impact Card 1 */}
          <div className="group relative overflow-hidden rounded-xl bg-white border border-blue-100 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
            <div className="transition-transform"></div>
            
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Issue Resolution</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-blue-600">65%</span>
                    <span className="text-sm text-green-600 font-medium">↓ faster</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Average issue resolution time reduced from 7.5 to 2.3 days through community monitoring
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Before Civic Eye</span>
                  <span>After Civic Eye</span>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-400 to-red-500 w-3/4"></div>
                  </div>
                  <div className="mx-2 text-gray-400">→</div>
                  <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Card 2 */}
          <div className="group relative overflow-hidden rounded-xl bg-white border border-emerald-100 p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
            <div className="transition-transform"></div>
            
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 p-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Active Volunteers</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-emerald-600">450+</span>
                    <span className="text-sm text-blue-600 font-medium">👥 engaged</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Community members actively participating in cleanup drives and neighborhood monitoring
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">Youth Participation</span>
                  <span className="text-xs font-medium text-emerald-600">85% under 30</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 w-4/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Card 3 */}
          <div className="group relative overflow-hidden rounded-xl bg-white border border-cyan-100 p-6 hover:shadow-lg hover:border-cyan-200 transition-all duration-300">
            <div className="transition-transform"></div>
            
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Clean Areas</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-cyan-600">85%</span>
                    <span className="text-sm text-emerald-600 font-medium">👍 maintained</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Neighborhoods maintaining excellent cleanliness scores with sustained community effort
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Clean Score</span>
                      <span className="text-xs font-medium text-emerald-600">8.5/10</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">AQI Improvement</span>
                      <span className="text-xs font-medium text-blue-600">+22%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Impact Metrics */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Additional Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
              <div className="text-2xl font-bold text-blue-600">2,340+</div>
              <div className="text-sm text-gray-600">Issues Reported</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all">
              <div className="text-2xl font-bold text-emerald-600">1,890</div>
              <div className="text-sm text-gray-600">Issues Resolved</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white border border-gray-100 hover:border-cyan-200 hover:shadow-sm transition-all">
              <div className="text-2xl font-bold text-cyan-600">92%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white border border-gray-100 hover:border-purple-200 hover:shadow-sm transition-all">
              <div className="text-2xl font-bold text-purple-600">15+</div>
              <div className="text-sm text-gray-600">Communities Served</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <button
            onClick={() => alert('📊 View Detailed Impact Report\n\nComplete analytics including:\n• Monthly trends\n• Area comparisons\n• Volunteer contributions\n• Cost savings\n• Environmental impact')}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-medium text-white hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg transition-all"
          >
            <TrendingUp className="h-5 w-5" />
            View Full Impact Report
          </button>
          <p className="mt-3 text-sm text-gray-600">
            Real data from 12 months of community monitoring
          </p>
        </div>
      </div>
    </div>
  )
}