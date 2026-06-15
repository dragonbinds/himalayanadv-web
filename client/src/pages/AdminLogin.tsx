import { useState } from 'react';
import { useLocation } from 'wouter';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAdmin();
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a small delay for security
    setTimeout(() => {
      if (login(password)) {
        setLocation('/admin');
      } else {
        setError('Invalid password. Please try again.');
        setPassword('');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041F42] via-[#051829] to-[#041F42] flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center pt-20 pb-20 container">
        <div className="w-full max-w-md">
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <div
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl"
              style={{ animation: 'float 20s ease-in-out infinite' }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"
              style={{ animation: 'float 25s ease-in-out infinite reverse' }}
            ></div>
          </div>

          {/* Login Card */}
          <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl animate-scale-in">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <Lock size={32} className="text-white" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-center text-white mb-2">Admin Access</h1>
            <p className="text-center text-white/60 mb-8">Enter your password to access the admin dashboard</p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Password Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-white/80 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all duration-300"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm animate-shake">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !password}
                className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isLoading ? 'Verifying...' : 'Access Dashboard'}
              </button>
            </form>

            {/* Footer Note */}
            <p className="text-center text-white/40 text-xs mt-6">
              This page is password protected. Only authorized personnel should access this area.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
