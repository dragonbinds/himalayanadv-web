import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { LogOut, Search, Download, Trash2, Eye, Archive } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import { useSubmissions, Submission } from '@/contexts/SubmissionsContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Admin() {
  const { isAuthenticated, logout } = useAdmin();
  const { submissions, updateSubmissionStatus, deleteSubmission, getStats } = useSubmissions();
  const [, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'read' | 'archived'>('all');
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      setLocation('/admin-login');
    }
  }, [isAuthenticated, setLocation]);

  if (!isAuthenticated) {
    return null;
  }

  const stats = getStats();

  // Filter submissions
  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch =
      sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterStatus === 'all' || sub.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  const handleViewSubmission = (submission: Submission) => {
    setSelectedSubmission(submission);
    setShowModal(true);
    if (submission.status === 'new') {
      updateSubmissionStatus(submission.id, 'read');
    }
  };

  const handleArchive = (id: string) => {
    updateSubmissionStatus(id, 'archived');
  };

  const handleDelete = (id: string) => {
    deleteSubmission(id);
  };

  const handleExportCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Service', 'Message', 'Submitted At', 'Status'];
    const rows = filteredSubmissions.map((sub) => [
      sub.name,
      sub.email,
      sub.phone,
      sub.company,
      sub.service,
      sub.message,
      new Date(sub.submittedAt).toLocaleString(),
      sub.status,
    ]);

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `submissions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'read':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'archived':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041F42] via-[#051829] to-[#041F42] flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20 container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-white/60">Manage all contact form submissions and requests</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-lg transition-all duration-300 hover-scale"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Submissions', value: stats.total, color: 'from-blue-500 to-blue-600' },
            { label: 'New', value: stats.new, color: 'from-blue-500 to-blue-600' },
            { label: 'Read', value: stats.read, color: 'from-green-500 to-green-600' },
            { label: 'Archived', value: stats.archived, color: 'from-gray-500 to-gray-600' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <p className="text-white/60 text-sm mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search by name, email, company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all duration-300"
            />
          </div>

          {/* Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all duration-300"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="archived">Archived</option>
          </select>

          {/* Export */}
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-6 py-3 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 rounded-lg transition-all duration-300 hover-scale"
          >
            <Download size={20} />
            Export CSV
          </button>
        </div>

        {/* Submissions Table */}
        {filteredSubmissions.length > 0 ? (
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg overflow-hidden animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Service</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.map((submission, idx) => (
                    <tr
                      key={submission.id}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300 animate-fade-in"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <td className="px-6 py-4 text-white font-medium">{submission.name}</td>
                      <td className="px-6 py-4 text-white/70">{submission.email}</td>
                      <td className="px-6 py-4 text-white/70">{submission.company}</td>
                      <td className="px-6 py-4 text-white/70">{submission.service}</td>
                      <td className="px-6 py-4 text-white/70 text-sm">
                        {new Date(submission.submittedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(submission.status)}`}>
                          {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewSubmission(submission)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-blue-400 hover:text-blue-300"
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>
                          {submission.status !== 'archived' && (
                            <button
                              onClick={() => handleArchive(submission.id)}
                              className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-gray-300"
                              title="Archive"
                            >
                              <Archive size={18} />
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(submission.id)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-red-400 hover:text-red-300"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-12 text-center animate-fade-in">
            <p className="text-white/60 text-lg">No submissions found</p>
          </div>
        )}
      </main>

      {/* Modal for viewing details */}
      {showModal && selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-[#041F42] to-[#051829] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-white/10 bg-white/5 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-white">Submission Details</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-white/60 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/60 text-sm">Name</label>
                  <p className="text-white font-medium mt-1">{selectedSubmission.name}</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Email</label>
                  <p className="text-white font-medium mt-1">{selectedSubmission.email}</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Phone</label>
                  <p className="text-white font-medium mt-1">{selectedSubmission.phone}</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Company</label>
                  <p className="text-white font-medium mt-1">{selectedSubmission.company}</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Service</label>
                  <p className="text-white font-medium mt-1">{selectedSubmission.service}</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Submitted At</label>
                  <p className="text-white font-medium mt-1">
                    {new Date(selectedSubmission.submittedAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <label className="text-white/60 text-sm">Message</label>
                <p className="text-white font-medium mt-2 bg-white/5 border border-white/10 rounded-lg p-4 whitespace-pre-wrap">
                  {selectedSubmission.message}
                </p>
              </div>

              {/* Modal Actions */}
              <div className="flex gap-3 pt-4 border-t border-white/10">
                {selectedSubmission.status !== 'archived' && (
                  <button
                    onClick={() => {
                      handleArchive(selectedSubmission.id);
                      setShowModal(false);
                    }}
                    className="flex-1 px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 border border-gray-500/30 text-gray-400 rounded-lg transition-all duration-300"
                  >
                    Archive
                  </button>
                )}
                <button
                  onClick={() => {
                    handleDelete(selectedSubmission.id);
                    setShowModal(false);
                  }}
                  className="flex-1 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-lg transition-all duration-300"
                >
                  Delete
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 rounded-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
