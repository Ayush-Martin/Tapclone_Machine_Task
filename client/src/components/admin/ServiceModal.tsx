import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Loader2 } from 'lucide-react';

const serviceSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(100, 'Name must be at most 100 characters'),
  description: z
    .string()
    .min(3, 'Description must be at least 3 characters')
    .max(1000, 'Description must be at most 1000 characters'),
});

type ServiceFormValues = z.infer<typeof serviceSchema>;

export interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ServiceFormValues) => Promise<void>;
  isLoading: boolean;
  initialData?: { name: string; description: string } | null;
  mode: 'create' | 'edit';
}

const ServiceModal = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  initialData,
  mode,
}: ServiceModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceSchema),
  });

  useEffect(() => {
    if (isOpen) {
      reset(initialData ?? { name: '', description: '' });
    }
  }, [isOpen, initialData, reset]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl w-full max-w-lg animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
          <h2 className="text-lg font-semibold text-white">
            {mode === 'create' ? 'Add New Service' : 'Edit Service'}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="service-name"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              Service Name
            </label>
            <input
              {...register('name')}
              id="service-name"
              type="text"
              placeholder="e.g. Web Development"
              className={`w-full px-4 py-3 bg-slate-800/50 border ${
                errors.name
                  ? 'border-red-500/50 focus:ring-red-500/30'
                  : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500/20'
              } rounded-xl outline-none focus:ring-4 transition-all text-white placeholder-slate-500`}
            />
            {errors.name && (
              <p className="mt-1.5 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="service-description"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              Description
            </label>
            <textarea
              {...register('description')}
              id="service-description"
              rows={4}
              placeholder="Describe what this service covers..."
              className={`w-full px-4 py-3 bg-slate-800/50 border ${
                errors.description
                  ? 'border-red-500/50 focus:ring-red-500/30'
                  : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500/20'
              } rounded-xl outline-none focus:ring-4 transition-all text-white placeholder-slate-500 resize-none`}
            />
            {errors.description && (
              <p className="mt-1.5 text-sm text-red-400">{errors.description.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl transition-colors border border-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex items-center justify-center py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 size={18} className="animate-spin mr-2" />
              ) : null}
              {mode === 'create' ? 'Create Service' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceModal;
