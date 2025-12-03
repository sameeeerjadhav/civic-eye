import { AlertCircle, Clock, CheckCircle } from 'lucide-react'

export default function StatusLegend() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Report Status</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
            <AlertCircle className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Needs Attention</p>
            <p className="text-sm text-gray-600">Reported issues requiring immediate action</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
            <Clock className="h-5 w-5 text-yellow-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">In Progress</p>
            <p className="text-sm text-gray-600">Issues currently being resolved</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Cleaned</p>
            <p className="text-sm text-gray-600">Successfully resolved issues</p>
          </div>
        </div>
      </div>
    </div>
  )
}