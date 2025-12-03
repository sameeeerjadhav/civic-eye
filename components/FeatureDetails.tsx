import { AlertCircle, Clock, CheckCircle, Target } from 'lucide-react'
import StatsCard from '@/components/StatsCard'
import WelcomeBanner from '@/components/WelcomeBanner'
import FeatureDetails from '@/components/FeatureDetails'
import StatusLegend from '@/components/StatusLegend'
import RecentActivity from '@/components/RecentActivity'
// import MapPlaceholder from '@/components/MapPlaceholder'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <WelcomeBanner />
      
      {/* Stats Overview */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
        <StatsCard
          title="Total Reports"
          count={3}
          description="Community issues reported"
          color="green"
          icon={<Target className="h-6 w-6" />}
        />
        <StatsCard
          title="Needs Attention"
          count={1}
          description="Requiring immediate action"
          color="red"
          icon={<AlertCircle className="h-6 w-6" />}
        />
        <StatsCard
          title="In Progress"
          count={1}
          description="Currently being resolved"
          color="yellow"
          icon={<Clock className="h-6 w-6" />}
        />
        <StatsCard
          title="Cleaned"
          count={1}
          description="Successfully resolved"
          color="green"
          icon={<CheckCircle className="h-6 w-6" />}
        />
      </div>

      <div className="mb-8">
        <FeatureDetails />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Map */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Cleanliness Heatmap</h3>
              <div className="flex gap-2">
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Map View
                </button>
                <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                  List View
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 p-8">
              <div className="mb-4 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Clean</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                  <span className="text-sm font-medium">Moderate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-500"></div>
                  <span className="text-sm font-medium">Critical</span>
                </div>
              </div>
              <div className="relative h-64 w-full rounded-lg border border-gray-300 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400">
                <div className="absolute left-1/4 top-1/4">
                  <div className="rounded-full bg-red-600 p-2">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div className="mt-1 rounded bg-white px-2 py-1 text-xs font-medium shadow-sm">Train phe</div>
                </div>
                <div className="absolute left-1/2 top-1/2">
                  <div className="rounded-full bg-yellow-600 p-2">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div className="mt-1 rounded bg-white px-2 py-1 text-xs font-medium shadow-sm">Graffiti</div>
                </div>
                <div className="absolute left-3/4 top-3/4">
                  <div className="rounded-full bg-green-600 p-2">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div className="mt-1 rounded bg-white px-2 py-1 text-xs font-medium shadow-sm">Cleaned</div>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-600">
                The map becomes the city's live health report
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <StatusLegend />
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}