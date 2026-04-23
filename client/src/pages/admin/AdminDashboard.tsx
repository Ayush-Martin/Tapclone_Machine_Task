import { Users, Activity, Globe, BarChart3 } from 'lucide-react';

const stats = [
  { label: 'Total Users', value: '12,489', icon: Users, change: '+12%', positive: true },
  { label: 'Active Sessions', value: '1,204', icon: Activity, change: '+5.4%', positive: true },
  { label: 'Global Traffic', value: '45.2K', icon: Globe, change: '-2.1%', positive: false },
  { label: 'Conversion Rate', value: '3.8%', icon: BarChart3, change: '+1.2%', positive: true },
];

const recentActivity = [
  { user: 'Sarah Jenkins', action: 'Created new campaign', status: 'Success', time: '2 mins ago' },
  { user: 'Mike Ross', action: 'Exported user data', status: 'Processing', time: '15 mins ago' },
  { user: 'Alex Chen', action: 'Failed login attempt', status: 'Failed', time: '1 hour ago' },
  { user: 'System', action: 'Database backup', status: 'Success', time: '3 hours ago' },
];

const statusStyles: Record<string, string> = {
  Success: 'bg-emerald-500/10 text-emerald-400',
  Failed: 'bg-red-500/10 text-red-400',
  Processing: 'bg-amber-500/10 text-amber-400',
};

const AdminDashboard = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Welcome back, Admin</h1>
        <p className="text-sm text-slate-400">Here's what's happening with your platform today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/60 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                <stat.icon size={20} className="text-blue-400" />
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">{stat.label}</h3>
            <p className="text-2xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-700/50 flex justify-between items-center">
          <h3 className="text-lg font-medium text-white">Recent Activity</h3>
          <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
            View all
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Action</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {recentActivity.map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-200">{row.user}</td>
                  <td className="px-6 py-4 text-slate-400">{row.action}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

