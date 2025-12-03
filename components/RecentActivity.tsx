import { AlertTriangle, SprayCan, Trash2, MapPin, CheckCircle } from 'lucide-react'

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: "Train phe near playground",
      location: "Center Park, Zara-A",
      status: "Needs Attention",
      icon: AlertTriangle,
      color: "red",
      time: "2 hours ago"
    },
    {
      id: 2,
      title: "Graffiti on community wall",
      location: "Main Street Community Center",
      status: "In Progress",
      icon: SprayCan,
      color: "yellow",
      time: "1 day ago"
    },
    {
      id: 3,
      title: "Sidewalk debris",
      location: "No Avenue & Kids St",
      status: "Cleaned",
      icon: CheckCircle,
      color: "green",
      time: "3 days ago"
    }
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="rounded-lg border border-gray-100 p-4 hover:bg-gray-50">
            <div className="flex items-start gap-3">
              <div className={`rounded-lg p-2 bg-${activity.color}-50`}>
                <activity.icon className={`h-5 w-5 text-${activity.color}-600`} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{activity.title}</h4>
                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <div className="mt-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium bg-${activity.color}-100 text-${activity.color}-700`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}