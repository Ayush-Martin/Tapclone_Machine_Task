import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Activity,
  BarChart3,
  Globe
} from 'lucide-react';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const stats = [
    { label: 'Total Users', value: '12,489', icon: Users, change: '+12%', positive: true },
    { label: 'Active Sessions', value: '1,204', icon: Activity, change: '+5.4%', positive: true },
    { label: 'Global Traffic', value: '45.2K', icon: Globe, change: '-2.1%', positive: false },
    { label: 'Conversion Rate', value: '3.8%', icon: BarChart3, change: '+1.2%', positive: true },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20">
            <LayoutDashboard size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg text-white tracking-wide">AdminPortal</span>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-2">
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={Users} label="Users Management" />
          <NavItem icon={Activity} label="Analytics" />
          <NavItem icon={Settings} label="System Settings" />
        </div>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-xl transition-colors group"
          >
            <LogOut size={18} className="mr-3 group-hover:-translate-x-1 transition-transform" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-b border-slate-800 backdrop-blur-md sticky top-0 z-10">
          <div className="flex-1 flex">
            <div className="relative w-full max-w-md hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-500" />
              </div>
              <input
                type="text"
                placeholder="Search anything..."
                className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-xl leading-5 bg-slate-800/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-slate-800 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 sm:text-sm transition-all"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-blue-500 ring-2 ring-slate-900" />
            </button>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 p-0.5">
                <div className="h-full w-full rounded-full bg-slate-900 flex items-center justify-center border-2 border-transparent">
                  <span className="text-xs font-bold text-white">AD</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-1">Welcome back, Admin</h1>
            <p className="text-sm text-slate-400">Here's what's happening with your platform today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/60 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-slate-800 border border-slate-700`}>
                    <stat.icon size={20} className="text-blue-400" />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-slate-400 text-sm font-medium mb-1">{stat.label}</h3>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity Table (Mock) */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-700/50 flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Recent Activity</h3>
              <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">View all</button>
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
                  {[
                    { user: 'Sarah Jenkins', action: 'Created new campaign', status: 'Success', time: '2 mins ago' },
                    { user: 'Mike Ross', action: 'Exported user data', status: 'Processing', time: '15 mins ago' },
                    { user: 'Alex Chen', action: 'Failed login attempt', status: 'Failed', time: '1 hour ago' },
                    { user: 'System', action: 'Database backup', status: 'Success', time: '3 hours ago' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-200">{row.user}</td>
                      <td className="px-6 py-4 text-slate-400">{row.action}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          row.status === 'Success' ? 'bg-emerald-500/10 text-emerald-400' :
                          row.status === 'Failed' ? 'bg-red-500/10 text-red-400' :
                          'bg-amber-500/10 text-amber-400'
                        }`}>
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
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <a href="#" className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${
    active 
      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
  }`}>
    <Icon size={18} className={`mr-3 ${active ? 'text-blue-400' : 'text-slate-500'}`} />
    {label}
  </a>
);

export default AdminDashboard;
