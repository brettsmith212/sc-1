import React from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon, TruckIcon, DollarSignIcon, ClockIcon } from 'lucide-react'

const Dashboard: React.FC = () => {
  // Mock data for recent shipments
  const recentShipments = [
    {
      id: 1,
      trackingNumber: '1Z999AA1234567890',
      recipient: 'John Smith',
      destination: 'New York, NY',
      date: '2024-01-15',
      carrier: 'UPS',
      savings: 45.80,
      status: 'Delivered'
    },
    {
      id: 2,
      trackingNumber: '9400111206213123456789',
      recipient: 'Jane Doe',
      destination: 'Los Angeles, CA',
      date: '2024-01-12',
      carrier: 'USPS',
      savings: 32.50,
      status: 'In Transit'
    },
    {
      id: 3,
      trackingNumber: '1Z999AA1234567891',
      recipient: 'Mike Johnson',
      destination: 'Chicago, IL',
      date: '2024-01-10',
      carrier: 'UPS',
      savings: 28.90,
      status: 'Delivered'
    }
  ]

  // Mock savings data
  const lifetimeSavings = 1247.50
  const monthSavings = 107.20
  const totalShipments = 23
  const thisMonthShipments = 3

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Track your savings and manage shipments</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Lifetime Savings */}
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSignIcon className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              ${lifetimeSavings.toFixed(2)}
            </h3>
            <p className="text-sm text-gray-600">Lifetime Savings</p>
          </div>

          {/* This Month Savings */}
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <ClockIcon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              ${monthSavings.toFixed(2)}
            </h3>
            <p className="text-sm text-gray-600">This Month ({thisMonthShipments} shipments)</p>
          </div>

          {/* Total Shipments */}
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TruckIcon className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {totalShipments}
            </h3>
            <p className="text-sm text-gray-600">Total Shipments</p>
          </div>

          {/* Average Savings */}
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <DollarSignIcon className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              ${(lifetimeSavings / totalShipments).toFixed(2)}
            </h3>
            <p className="text-sm text-gray-600">Average Savings</p>
          </div>
        </div>

        {/* Main Action */}
        <div className="mb-8">
          <Link
            to="/new-shipment"
            className="inline-flex items-center px-6 py-3 bg-[#B0EC9C] text-gray-900 font-semibold rounded-lg hover:bg-[#9DE085] transition-colors duration-200 shadow-sm"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Create New Shipment
          </Link>
        </div>

        {/* Recent Shipments */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Recent Shipments</h2>
              <Link
                to="/history"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {recentShipments.map((shipment) => (
              <div key={shipment.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <TruckIcon className="w-5 h-5 text-gray-600" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {shipment.recipient}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {shipment.destination}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        {shipment.carrier}
                      </p>
                      <p className="text-sm text-gray-500">
                        {shipment.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">
                        ${shipment.savings.toFixed(2)} saved
                      </p>
                      <p className={`text-sm ${
                        shipment.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'
                      }`}>
                        {shipment.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
