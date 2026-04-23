import { useState, useEffect, useCallback } from 'react';
import { Plus, Pencil, Trash2, Briefcase, Loader2, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../../api/axios';
import ServiceModal from '../../components/admin/ServiceModal';

interface Service {
  id: string;
  name: string;
  description: string;
}

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [editTarget, setEditTarget] = useState<Service | null>(null);

  // Delete confirmation state
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // ─── Fetch ────────────────────────────────────────────────────────────────

  const fetchServices = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await api.get('/services');
      setServices(res.data?.data ?? []);
    } catch {
      setError('Failed to load services. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  // ─── Handlers ─────────────────────────────────────────────────────────────

  const openCreateModal = () => {
    setModalMode('create');
    setEditTarget(null);
    setModalOpen(true);
  };

  const openEditModal = (service: Service) => {
    setModalMode('edit');
    setEditTarget(service);
    setModalOpen(true);
  };

  const handleModalSubmit = async (data: { name: string; description: string }) => {
    try {
      setIsSubmitting(true);
      if (modalMode === 'create') {
        const res = await api.post('/services', data);
        setServices((prev) => [res.data.data, ...prev]);
        toast.success('Service created successfully');
      } else if (editTarget) {
        const res = await api.put(`/services/${editTarget.id}`, data);
        setServices((prev) =>
          prev.map((s) => (s.id === editTarget.id ? res.data.data : s)),
        );
        toast.success('Service updated successfully');
      }
      setModalOpen(false);
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setIsDeleting(true);
      await api.delete(`/services/${id}`);
      setServices((prev) => prev.filter((s) => s.id !== id));
      toast.success('Service deleted successfully');
      setDeleteTargetId(null);
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Failed to delete service');
    } finally {
      setIsDeleting(false);
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Services</h1>
          <p className="text-sm text-slate-400">
            Manage the services offered by your platform.
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-blue-600/20 group"
        >
          <Plus size={18} className="group-hover:rotate-90 transition-transform duration-200" />
          Add Service
        </button>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-500">
          <Loader2 size={36} className="animate-spin mb-3 text-blue-500" />
          <p className="text-sm">Loading services...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-500">
          <AlertCircle size={36} className="mb-3 text-red-400" />
          <p className="text-sm text-red-400 mb-4">{error}</p>
          <button
            onClick={fetchServices}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-xl border border-slate-700 transition-colors"
          >
            Retry
          </button>
        </div>
      ) : services.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-500 border border-dashed border-slate-700 rounded-2xl">
          <Briefcase size={40} className="mb-3 text-slate-600" />
          <p className="text-base font-medium text-slate-400 mb-1">No services yet</p>
          <p className="text-sm mb-5">Create your first service to get started.</p>
          <button
            onClick={openCreateModal}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-sm font-medium rounded-xl border border-blue-500/20 transition-colors"
          >
            <Plus size={16} />
            Add Service
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/60 hover:border-slate-600/50 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20">
                  <Briefcase size={18} className="text-blue-400" />
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => openEditModal(service)}
                    className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                    title="Edit service"
                  >
                    <Pencil size={15} />
                  </button>
                  <button
                    onClick={() => setDeleteTargetId(service.id)}
                    className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    title="Delete service"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

              <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                {service.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 flex-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      <ServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
        isLoading={isSubmitting}
        initialData={editTarget}
        mode={modalMode}
      />

      {/* Delete Confirmation Dialog */}
      {deleteTargetId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setDeleteTargetId(null)}
          />
          <div className="relative bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 mx-auto mb-4">
              <Trash2 size={22} className="text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white text-center mb-1">
              Delete Service
            </h3>
            <p className="text-sm text-slate-400 text-center mb-6">
              Are you sure you want to delete this service? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteTargetId(null)}
                className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl transition-colors border border-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteTargetId)}
                disabled={isDeleting}
                className="flex-1 flex items-center justify-center py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white font-medium rounded-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isDeleting ? (
                  <Loader2 size={16} className="animate-spin mr-2" />
                ) : null}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesPage;
